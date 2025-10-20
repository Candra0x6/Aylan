/**
 * AI Provider Settings Component
 * Allows users to select AI provider and optionally provide custom API key
 */

'use client';

import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Info, Eye, EyeOff, Sparkles, Brain, MessageSquare, Key, Settings2 } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export type AIProvider = 'gemini' | 'claude' | 'chatgpt';

interface AIProviderSettingsProps {
  aiProvider: AIProvider;
  customApiKey: string;
  onProviderChange: (provider: AIProvider) => void;
  onApiKeyChange: (apiKey: string) => void;
}

interface ProviderInfo {
  value: AIProvider;
  label: string;
  icon: React.ReactNode;
  model: string;
  description: string;
  features: string[];
  color: string;
  isDefault?: boolean;
}

const AI_PROVIDERS: ProviderInfo[] = [
  {
    value: 'gemini',
    label: 'Google Gemini',
    icon: <Sparkles className="h-4 w-4" />,
    model: 'gemini-2.5-flash',
    description: 'Fast, efficient, and cost-effective content generation',
    features: ['Fast response', 'Cost-effective', 'Reliable'],
    color: 'bg-blue-500',
    isDefault: true
  },
  {
    value: 'claude',
    label: 'Anthropic Claude',
    icon: <Brain className="h-4 w-4" />,
    model: 'claude-3-5-sonnet',
    description: 'Advanced reasoning and nuanced content creation',
    features: ['Advanced reasoning', 'Nuanced content', 'High quality'],
    color: 'bg-purple-500'
  },
  {
    value: 'chatgpt',
    label: 'OpenAI ChatGPT',
    icon: <MessageSquare className="h-4 w-4" />,
    model: 'gpt-4o',
    description: 'Powerful and creative content generation',
    features: ['Creative output', 'Versatile', 'Well-tested'],
    color: 'bg-green-500'
  }
];

export const AIProviderSettings: React.FC<AIProviderSettingsProps> = ({
  aiProvider,
  customApiKey,
  onProviderChange,
  onApiKeyChange
}) => {
  const [showApiKey, setShowApiKey] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const selectedProvider = AI_PROVIDERS.find(p => p.value === aiProvider);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex-1">
      <Card className="border-dashed">
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings2 className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-lg">AI Provider Settings</CardTitle>
                <Badge variant="secondary" className="ml-2">Optional</Badge>
              </div>
              <Button variant="ghost" size="sm">
                {isOpen ? 'Hide' : 'Configure'}
              </Button>
            </div>
            <CardDescription>
              Choose your AI provider and optionally use a custom API key
              {!isOpen && selectedProvider && (
                <span className="block mt-1 text-sm">
                  Currently using: <strong>{selectedProvider.label}</strong>
                  {customApiKey && ' with custom key'}
                </span>
              )}
            </CardDescription>
          </CardHeader>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="space-y-6 pt-6">
            {/* AI Provider Selection */}
            <div className="space-y-3">
              <Label htmlFor="aiProvider" className="text-base font-semibold flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Select AI Provider
              </Label>
              
              <Select
                value={aiProvider}
                onValueChange={(value) => onProviderChange(value as AIProvider)}
              >
                <SelectTrigger className="" size='default'>
                  <h1>Select AI Provider</h1>
                </SelectTrigger>
                <SelectContent>
                  {AI_PROVIDERS.map((provider) => (
                    <SelectItem key={provider.value} value={provider.value} className="py-3">
                      <div className="flex items-start gap-3 py-1">
                        <div className={`p-2 rounded-md ${provider.color} text-white`}>
                          {provider.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{provider.label}</span>
                            {provider.isDefault && (
                              <Badge variant="secondary" className="text-xs">
                                Default
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mb-1">
                            Model: {provider.model}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {provider.description}
                          </p>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Provider Info Card */}
              {selectedProvider && (
                <div className="mt-3 p-4 rounded-lg bg-muted/50 border">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-md ${selectedProvider.color} text-white`}>
                      {selectedProvider.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 flex items-center gap-2">
                        {selectedProvider.label}
                        {selectedProvider.isDefault && (
                          <Badge variant="outline" className="text-xs">
                            Recommended
                          </Badge>
                        )}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {selectedProvider.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProvider.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Custom API Key Input */}
            <div className="space-y-3 pt-2 border-t">
              <div className="flex items-start gap-2">
                <Label htmlFor="customApiKey" className="text-base font-semibold flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  Custom API Key
                </Label>
                <Badge variant="outline" className="text-xs">
                  Optional
                </Badge>
              </div>

              <div className="relative">
                <Input
                  id="customApiKey"
                  type={showApiKey ? 'text' : 'password'}
                  placeholder={`Enter your ${selectedProvider?.label || 'AI provider'} API key...`}
                  value={customApiKey}
                  onChange={(e) => onApiKeyChange(e.target.value)}
                  className="pr-10 font-mono text-sm"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                  onClick={() => setShowApiKey(!showApiKey)}
                >
                  {showApiKey ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>

              <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-blue-900 dark:text-blue-100 space-y-1">
                  <p className="font-medium">About API Keys:</p>
                  <ul className="list-disc list-inside space-y-0.5 text-blue-800 dark:text-blue-200">
                    <li>Leave empty to use system default (recommended)</li>
                    <li>Your key is only used for this request and never stored</li>
                    <li>Useful for testing different providers or personal keys</li>
                  </ul>
                </div>
              </div>

              {/* Quick Links */}
              <div className="pt-2">
                <p className="text-xs text-muted-foreground mb-2">Need an API key?</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProvider?.value === 'gemini' && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      asChild
                    >
                      <a
                        href="https://makersuite.google.com/app/apikey"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Gemini API Key →
                      </a>
                    </Button>
                  )}
                  {selectedProvider?.value === 'claude' && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      asChild
                    >
                      <a
                        href="https://console.anthropic.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Claude API Key →
                      </a>
                    </Button>
                  )}
                  {selectedProvider?.value === 'chatgpt' && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      asChild
                    >
                      <a
                        href="https://platform.openai.com/api-keys"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get OpenAI API Key →
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};
