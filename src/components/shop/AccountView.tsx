import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, MapPin, CreditCard, Phone, Wallet } from "lucide-react";
import ShopLayout from "./ShopLayout";

const AccountView = () => {
  return (
    <ShopLayout>
      <div className="container mx-auto py-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-xl">
            <User className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">My Account</h1>
            <p className="text-sm text-muted-foreground">
              Manage your profile and preferences
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <Card className="p-6 bg-white border-0 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 flex items-center justify-center">
                <User className="w-12 h-12 text-primary" />
              </div>
              <div className="text-center">
                <h2 className="font-semibold">John Doe</h2>
                <p className="text-sm text-muted-foreground">
                  john.doe@example.com
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full rounded-full hover:bg-primary/5 hover:text-primary transition-colors"
              >
                Edit Profile
              </Button>
            </div>
          </Card>

          <div className="col-span-3">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-full p-1 bg-muted">
                <TabsTrigger value="profile" className="rounded-full">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="addresses" className="rounded-full">
                  Addresses
                </TabsTrigger>
                <TabsTrigger value="payment" className="rounded-full">
                  Payment Methods
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="mt-6">
                <Card className="p-6 border-0 hover:shadow-lg transition-shadow">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>First Name</Label>
                        <Input defaultValue="John" className="rounded-full" />
                      </div>
                      <div className="space-y-2">
                        <Label>Last Name</Label>
                        <Input defaultValue="Doe" className="rounded-full" />
                      </div>
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <Input
                          defaultValue="john.doe@example.com"
                          type="email"
                          className="rounded-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone</Label>
                        <Input
                          defaultValue="+1 234 567 890"
                          type="tel"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <Button className="rounded-full">Save Changes</Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="addresses" className="mt-6">
                <Card className="p-6 border-0 hover:shadow-lg transition-shadow">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Saved Addresses</h3>
                      <Button className="rounded-full">
                        <MapPin className="w-4 h-4 mr-2" />
                        Add New Address
                      </Button>
                    </div>

                    <div className="grid gap-4">
                      <Card className="p-4 border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium">Home</p>
                              <Badge
                                variant="secondary"
                                className="rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                              >
                                Default
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              123 Main St, Apt 4B
                              <br />
                              New York, NY 10001
                            </p>
                          </div>
                          <div className="space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full"
                            >
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full"
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-4 border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex justify-between">
                          <div className="space-y-1">
                            <p className="font-medium">Work</p>
                            <p className="text-sm text-muted-foreground">
                              456 Business Ave
                              <br />
                              New York, NY 10002
                            </p>
                          </div>
                          <div className="space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full"
                            >
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full"
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="payment" className="mt-6">
                <Card className="p-6 border-0 hover:shadow-lg transition-shadow">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Payment Methods</h3>
                      <div className="flex gap-2">
                        <Button variant="outline" className="rounded-full">
                          <Phone className="w-4 h-4 mr-2" />
                          Add Mobile Money
                        </Button>
                        <Button className="rounded-full">
                          <CreditCard className="w-4 h-4 mr-2" />
                          Add Card
                        </Button>
                      </div>
                    </div>

                    <div className="grid gap-6">
                      {/* Credit Cards */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium text-muted-foreground">
                          Credit & Debit Cards
                        </h4>
                        <div className="grid gap-4">
                          <Card className="p-4 border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                                  <CreditCard className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <p className="font-medium">
                                    •••• •••• •••• 4242
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    Expires 12/24
                                  </p>
                                </div>
                              </div>
                              <div className="space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="rounded-full"
                                >
                                  Edit
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="rounded-full"
                                >
                                  Delete
                                </Button>
                              </div>
                            </div>
                          </Card>

                          <Card className="p-4 border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-8 bg-gradient-to-r from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                                  <CreditCard className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <p className="font-medium">
                                    •••• •••• •••• 8888
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    Expires 08/25
                                  </p>
                                </div>
                              </div>
                              <div className="space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="rounded-full"
                                >
                                  Edit
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="rounded-full"
                                >
                                  Delete
                                </Button>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </div>

                      {/* Mobile Money */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium text-muted-foreground">
                          Mobile Money
                        </h4>
                        <div className="grid gap-4">
                          <Card className="p-4 border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                                  <Wallet className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <p className="font-medium">
                                    MTN Mobile Money
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    +233 ••• •••• 890
                                  </p>
                                </div>
                              </div>
                              <div className="space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="rounded-full"
                                >
                                  Edit
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="rounded-full"
                                >
                                  Delete
                                </Button>
                              </div>
                            </div>
                          </Card>

                          <Card className="p-4 border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                                  <Wallet className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <p className="font-medium">Vodafone Cash</p>
                                  <p className="text-sm text-muted-foreground">
                                    +233 ••• •••• 567
                                  </p>
                                </div>
                              </div>
                              <div className="space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="rounded-full"
                                >
                                  Edit
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="rounded-full"
                                >
                                  Delete
                                </Button>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default AccountView;
