
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import { LayoutDashboard, ListTodo, CheckCircle2, Clock, Zap, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Sample data for charts and tables
const productivityData = [
  { day: 'Mon', completed: 5, assigned: 8 },
  { day: 'Tue', completed: 7, assigned: 10 },
  { day: 'Wed', completed: 9, assigned: 12 },
  { day: 'Thu', completed: 6, assigned: 7 },
  { day: 'Fri', completed: 8, assigned: 8 },
  { day: 'Sat', completed: 3, assigned: 5 },
  { day: 'Sun', completed: 2, assigned: 3 },
];

const taskTypeData = [
  { type: 'Development', count: 12 },
  { type: 'Design', count: 8 },
  { type: 'Marketing', count: 5 },
  { type: 'Research', count: 7 },
  { type: 'Planning', count: 10 },
];

const recentTasks = [
  { id: 1, name: 'Redesign homepage', priority: 'High', status: 'In Progress', due: '2025-04-06' },
  { id: 2, name: 'Implement authentication', priority: 'High', status: 'Completed', due: '2025-04-03' },
  { id: 3, name: 'Create marketing assets', priority: 'Medium', status: 'Not Started', due: '2025-04-10' },
  { id: 4, name: 'API integration', priority: 'High', status: 'In Progress', due: '2025-04-08' },
  { id: 5, name: 'User testing', priority: 'Medium', status: 'Not Started', due: '2025-04-15' },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Not Started':
        return 'bg-gray-100 text-gray-800';
      default:
        return '';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7ff]">
      <header className="bg-gradient shadow-md">
        <Navbar />
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex gap-4">
            <Badge variant="outline" className="px-3 py-1 text-sm bg-white border-primary/20 text-primary">
              <Clock className="w-4 h-4 mr-1" /> {new Date().toLocaleDateString()}
            </Badge>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-2 md:flex md:w-auto gap-1">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="tasks" className="flex items-center gap-2">
              <ListTodo className="h-4 w-4" />
              <span>Tasks</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <ListTodo className="h-5 w-5 mr-2 text-primary" />
                    Total Tasks
                  </CardTitle>
                  <CardDescription>Current task count</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground mt-1">+5 from last week</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                    Completed
                  </CardTitle>
                  <CardDescription>Tasks completed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">28</div>
                  <p className="text-xs text-green-600 mt-1">67% completion rate</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                    Overdue
                  </CardTitle>
                  <CardDescription>Tasks past due date</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground mt-1">-2 from last week</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-primary" />
                    Weekly Productivity
                  </CardTitle>
                  <CardDescription>Tasks assigned vs. completed</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{ assigned: { color: "#4361ee" }, completed: { color: "#4cc9f0" } }} className="h-64">
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={productivityData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Line type="monotone" dataKey="assigned" name="Assigned" stroke="var(--color-assigned, #4361ee)" strokeWidth={2} />
                        <Line type="monotone" dataKey="completed" name="Completed" stroke="var(--color-completed, #4cc9f0)" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <ListTodo className="h-5 w-5 mr-2 text-primary" />
                    Task Types
                  </CardTitle>
                  <CardDescription>Distribution by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{ count: { color: "#3f37c9" } }} className="h-64">
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={taskTypeData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <XAxis dataKey="type" />
                        <YAxis />
                        <Bar dataKey="count" name="Tasks" fill="var(--color-count, #3f37c9)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <ListTodo className="h-5 w-5 mr-2 text-primary" />
                  Recent Tasks
                </CardTitle>
                <CardDescription>Your latest task activity</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Task</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Due Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTasks.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell className="font-medium">{task.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={`${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={`${getStatusColor(task.status)}`}>
                            {task.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(task.due).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
