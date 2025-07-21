"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/ui/primitives/card';
import { Button } from '~/ui/primitives/button';
import { Input } from '~/ui/primitives/input';
import { Textarea } from '~/ui/primitives/textarea';
import { Label } from '~/ui/primitives/label';
import { Alert, AlertDescription } from '~/ui/primitives/alert';
import { Mail, Send, User, MessageSquare } from 'lucide-react';

// Define types for form data and errors
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  acceptTerms: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  // acceptTerms?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    acceptTerms: true // default checked
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Este campo es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Por favor ingrese un Email válido';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Encabezado es requerido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Su mensaje debe contener al menos 10 caracteres';
    }

    // if (!formData.acceptTerms) {
    //   newErrors.acceptTerms = 'Acepta el uso de sus datos para contactarlo?'
    // }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        acceptTerms: true
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto p-6">
        <Alert className="border-green-200 bg-green-50">
          <Mail className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-3xl font-black">
            <MessageSquare className="h-6 w-6" />
            Contáctanos
          </CardTitle>
          <CardDescription>
            Nos pondremos en contacto lo más pronto posible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-lg font-bold">
                <User className="h-5 w-5" />
                Nombre
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Nombre / empresa"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? 'border-red-500 focus:border-red-500' : ''}
              />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-lg font-bold">
                <Mail className="h-5 w-5" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="email@empresa.com"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'border-red-500 focus:border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className='text-lg font-bold'>Asunto</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="De qué se trata el mensaje?"
                value={formData.subject}
                onChange={handleInputChange}
                className={errors.subject ? 'border-red-500 focus:border-red-500' : ''}
              />
              {errors.subject && (
                <p className="text-sm text-red-600">{errors.subject}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className='text-xl font-bold'>Mensaje</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Cuéntanos más acerca de tu consulta..."
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className={errors.message ? 'border-red-500 focus:border-red-500' : ''}
              />
              {errors.message && (
                <p className="text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={(e) => setFormData({...formData, acceptTerms: e.target.checked})}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="acceptTerms" className="text-sm text-gray-700">
                Acepto el uso de mi información para recibir contenido de Inovac Construcciones
              </label>
            </div>
            {/* {errors.acceptTerms && (
              <p className="text-sm text-red-600">{errors.acceptTerms}</p>
            )} */}

            <Button 
              type="submit" 
              className="w-full text-lg" 
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Enviando mensaje...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensaje
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}