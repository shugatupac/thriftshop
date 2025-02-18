import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, MapPin, CreditCard } from "lucide-react";
import ShopLayout from "./ShopLayout";

const AccountView = () => {
  return (
    <ShopLayout>
      <div className="container mx-auto py-8 space-y-6">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5" />
          <h1 className="text-2xl font-bold">My Account</h1>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center">
                <User className="w-12 h-12 text-muted-foreground" />
              </div>
              <div className="text-center">
                <h2 className="font-semibold">John Doe</h2>
                <p className="text-sm text-muted-foreground">
                  john.doe@example.com
                </p>
              </div>
              <Button variant="outline" className="w-full">
                Edit Profile
              </Button>
            </div>
          </Card>

          <div className="col-span-3">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="addresses">Addresses</TabsTrigger>
                <TabsTrigger value="payment">Payment Methods</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="mt-6">
                <Card className="p-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>First Name</Label>
                        <Input defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label>Last Name</Label>
                        <Input defaultValue="Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <Input
                          defaultValue="john.doe@example.com"
                          type="email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone</Label>
                        <Input defaultValue="+1 234 567 890" type="tel" />
                      </div>
                    </div>
                    <Button>Save Changes</Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="addresses" className="mt-6">
                <Card className="p-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Saved Addresses</h3>
                      <Button>
                        <MapPin className="w-4 h-4 mr-2" />
                        Add New Address
                      </Button>
                    </div>

                    <div className="grid gap-4">
                      <Card className="p-4">
                        <div className="flex justify-between">
                          <div className="space-y-1">
                            <p className="font-medium">Home</p>
                            <p className="text-sm text-muted-foreground">
                              123 Main St, Apt 4B
                              <br />
                              New York, NY 10001
                            </p>
                          </div>
                          <div className="space-x-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              Delete
                            </Button>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-4">
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
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
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
                <Card className="p-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Payment Methods</h3>
                      <Button>
                        <CreditCard className="w-4 h-4 mr-2" />
                        Add New Card
                      </Button>
                    </div>

                    <div className="grid gap-4">
                      <Card className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded" />
                            <div>
                              <p className="font-medium">•••• •••• •••• 4242</p>
                              <p className="text-sm text-muted-foreground">
                                Expires 12/24
                              </p>
                            </div>
                          </div>
                          <div className="space-x-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              Delete
                            </Button>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-8 bg-gradient-to-r from-green-600 to-green-800 rounded" />
                            <div>
                              <p className="font-medium">•••• •••• •••• 8888</p>
                              <p className="text-sm text-muted-foreground">
                                Expires 08/25
                              </p>
                            </div>
                          </div>
                          <div className="space-x-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              Delete
                            </Button>
                          </div>
                        </div>
                      </Card>
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
