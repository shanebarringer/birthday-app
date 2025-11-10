'use client';

import { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Button, Input, Chip, Spinner } from '@heroui/react';
import { Lock, CheckCircle2, XCircle, Clock, Trash2 } from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      fetchMessages();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        setPassword('');
      } else {
        setAuthError('Incorrect password');
      }
    } catch (error) {
      setAuthError('Authentication failed');
    }
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data.messages);
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id, action) => {
    setActionLoading(id);
    try {
      const response = await fetch('/api/admin/messages', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action }),
      });

      if (response.ok) {
        await fetchMessages();
      }
    } catch (error) {
      console.error('Action failed:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    setActionLoading(id);
    try {
      const response = await fetch('/api/admin/messages', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        await fetchMessages();
      }
    } catch (error) {
      console.error('Delete failed:', error);
    } finally {
      setActionLoading(null);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-sakura-50/30 flex items-center justify-center px-4">
        <Card className="w-full max-w-md border-2 border-sakura-200 shadow-xl">
          <CardHeader className="flex-col items-center px-6 pt-8 pb-4">
            <div className="w-16 h-16 bg-sakura-500 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-gray-800">Admin Access</h1>
            <p className="text-sm text-gray-500 text-center mt-2">
              Enter the admin password to manage friend messages
            </p>
          </CardHeader>
          <CardBody className="px-6 pb-8">
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                label="Password"
                placeholder="Enter admin password"
                value={password}
                onValueChange={setPassword}
                required
                size="lg"
                autoFocus
                classNames={{
                  inputWrapper: "border-2 border-gray-200 hover:border-sakura-300 focus-within:!border-sakura-500"
                }}
              />

              {authError && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3">
                  <p className="text-red-600 text-sm">{authError}</p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-sakura-500 text-white font-semibold hover:bg-sakura-600"
              >
                Login
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    );
  }

  const pendingMessages = messages.filter(m => !m.approved);
  const approvedMessages = messages.filter(m => m.approved);

  return (
    <div className="min-h-screen bg-sakura-50/30 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
            Message Moderation
          </h1>
          <p className="text-gray-600">Review and approve birthday messages for Stella</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <Spinner size="lg" color="default" />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Pending Messages */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-orange-500" />
                <h2 className="text-xl font-serif font-bold text-gray-800">
                  Pending Approval ({pendingMessages.length})
                </h2>
              </div>

              {pendingMessages.length === 0 ? (
                <Card className="border-2 border-gray-200">
                  <CardBody className="text-center py-12">
                    <p className="text-gray-500">No pending messages</p>
                  </CardBody>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {pendingMessages.map((msg) => (
                    <Card key={msg.id} className="border-2 border-orange-200 shadow-md">
                      <CardBody className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-gray-800">{msg.name}</h3>
                              <Chip size="sm" variant="flat" color="warning">Pending</Chip>
                            </div>
                            <p className="text-gray-700 mb-3 whitespace-pre-wrap">{msg.message}</p>
                            <p className="text-xs text-gray-500">
                              Submitted {new Date(msg.createdAt).toLocaleString()}
                            </p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button
                              size="sm"
                              color="success"
                              variant="flat"
                              isLoading={actionLoading === msg.id}
                              onPress={() => handleAction(msg.id, 'approve')}
                              startContent={<CheckCircle2 className="w-4 h-4" />}
                            >
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              color="danger"
                              variant="flat"
                              isLoading={actionLoading === msg.id}
                              onPress={() => handleDelete(msg.id)}
                              startContent={<Trash2 className="w-4 h-4" />}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              )}
            </section>

            {/* Approved Messages */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <h2 className="text-xl font-serif font-bold text-gray-800">
                  Approved Messages ({approvedMessages.length})
                </h2>
              </div>

              {approvedMessages.length === 0 ? (
                <Card className="border-2 border-gray-200">
                  <CardBody className="text-center py-12">
                    <p className="text-gray-500">No approved messages yet</p>
                  </CardBody>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {approvedMessages.map((msg) => (
                    <Card key={msg.id} className="border-2 border-green-200 shadow-md">
                      <CardBody className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-gray-800">{msg.name}</h3>
                              <Chip size="sm" variant="flat" color="success">Approved</Chip>
                            </div>
                            <p className="text-gray-700 mb-3 whitespace-pre-wrap">{msg.message}</p>
                            <p className="text-xs text-gray-500">
                              Approved {new Date(msg.approvedAt).toLocaleString()}
                            </p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button
                              size="sm"
                              color="warning"
                              variant="flat"
                              isLoading={actionLoading === msg.id}
                              onPress={() => handleAction(msg.id, 'unapprove')}
                              startContent={<XCircle className="w-4 h-4" />}
                            >
                              Unapprove
                            </Button>
                            <Button
                              size="sm"
                              color="danger"
                              variant="flat"
                              isLoading={actionLoading === msg.id}
                              onPress={() => handleDelete(msg.id)}
                              startContent={<Trash2 className="w-4 h-4" />}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
