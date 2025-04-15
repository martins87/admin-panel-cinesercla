import React from 'react';
import Image from 'next/image';
import { logoBig } from "@/app/constants/icons";
import { login } from "@/app/constants/icons";
import Button from '@/app/components/ui/Button';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side image */}
      <div className="w-1/2 bg-cover bg-center relative hidden md:block" style={{ backgroundImage: 'url(/movie-bg.jpg)' }}>
        <Image src={login} fill alt="Login Banner" />
      </div>

      {/* Right side login form */}
      <div className="w-full md:w-1/2 bg-[#1C212A] flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-8">
            <Image src={logoBig} alt="Cinesercla Logo" width={180} height={40} />
          </div>
          <h2 className="text-white text-2xl font-semibold text-center mb-2">Bem-vindo à administração</h2>
          <p className="text-gray-400 text-center mb-6 text-sm">Faça login para acessar as funções do painel</p>

          <form className="space-y-4">
            <div>
              <label className="block text-white text-sm mb-1">E-mail</label>
              <input
                type="email"
                placeholder="Digite o E-Mail"
                className="w-full h-12 px-4 rounded-md bg-white text-black border border-[#2C2F36] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-white text-sm mb-1">Senha</label>
              <input
                type="password"
                placeholder="Digite a Senha"
                className="w-full h-12 px-4 rounded-md bg-white text-black border border-[#2C2F36] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="remember" className="text-white text-sm">Lembrar de Mim</label>
            </div>
            <Button label="LOGIN" full primary />
          </form>
        </div>
      </div>
    </div>
  );
}
