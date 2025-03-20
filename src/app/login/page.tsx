"use client";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de connexion ici
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <Card className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">CONNEXION</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <Input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <Button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded-lg"
            >
              Se connecter
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <a href="#" className="text-blue-500 hover:underline">
            Mot de passe oublié ?
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
