import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Bell, Moon, Sun } from "lucide-react";

interface SettingsViewProps {
  settings?: {
    notifications: boolean;
    darkMode: boolean;
    email: string;
  };
  onUpdateSettings?: (settings: Partial<SettingsViewProps["settings"]>) => void;
}

const SettingsView = ({
  settings = {
    notifications: true,
    darkMode: false,
    email: "admin@thriftstore.com",
  },
  onUpdateSettings = () => {},
}: SettingsViewProps) => {
  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <div className="space-y-8 max-w-3xl">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Manage your account preferences
          </p>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                value={settings.email}
                onChange={(e) => onUpdateSettings({ email: e.target.value })}
              />
            </div>
            <Button variant="outline">Change Password</Button>
          </div>

          <Separator className="my-6" />

          <h2 className="text-xl font-semibold mb-4">Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications about orders and updates
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Bell className="w-4 h-4 text-muted-foreground" />
                <Switch
                  checked={settings.notifications}
                  onCheckedChange={(checked) =>
                    onUpdateSettings({ notifications: checked })
                  }
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Toggle dark mode theme
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {settings.darkMode ? (
                  <Moon className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Sun className="w-4 h-4 text-muted-foreground" />
                )}
                <Switch
                  checked={settings.darkMode}
                  onCheckedChange={(checked) =>
                    onUpdateSettings({ darkMode: checked })
                  }
                />
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-destructive">
          <h2 className="text-xl font-semibold text-destructive mb-4">
            Danger Zone
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
          <Button variant="destructive">Delete Account</Button>
        </Card>
      </div>
    </div>
  );
};

export default SettingsView;
