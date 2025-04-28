import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { Label } from "@/components/ui/label";
  import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            
          </CardTitle>
        </CardHeader>
        <CardContent>
              
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="saim"
                    
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="********"
                    
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="acceptedTerms"
                    name="acceptedTerms"
                    checked={'formData'}
                  />
                  <label
                    htmlFor="acceptedTerms"
                    className="text-sm text-muted-foreground"
                  >
                    I accept the Terms and Conditions
                  </label>
                </div>
                <Button type="submit" className="w-full bg-zinc-800">
                  Register
                </Button>
        </CardContent>
      </Card>
    </div>
    );
};

export default Login;