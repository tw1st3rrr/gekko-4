import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun } from "lucide-react"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Newsletter */}
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Будьте в курсе</h2>
            <p className="mb-6 text-muted-foreground">
              Новинки, акции и идеи для пиксельного творчества — прямо на почту.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Ваш email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Подписаться</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Навигация</h3>
            <nav className="space-y-2 text-sm">
              <a href="https://gekkotoys.ru" className="block transition-colors hover:text-primary">
                Главная
              </a>
              <a href="https://gekkotoys.ru/catalog" className="block transition-colors hover:text-primary">
                Каталог наборов
              </a>
              <a href="http://91.229.10.93:5000/" className="block transition-colors hover:text-primary">
                Пикселизатор
              </a>
              <a href="https://gekkotoys.ru/delivery" className="block transition-colors hover:text-primary">
                Доставка и оплата
              </a>
              <a href="#contact" className="block transition-colors hover:text-primary">
                Контакты
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Контакты</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p>Россия, Москва</p>
              <p>ООО «Алекс Тойс»</p>
              <p>
                <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </p>
              <p>
                <a href="mailto:oooalextoys@mail.ru" className="hover:text-primary transition-colors">
                  oooalextoys@mail.ru
                </a>
              </p>
            </address>
          </div>

          {/* Social + dark mode */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Мы в соцсетях</h3>
            <div className="mb-6 flex space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="https://vk.com/gekkotoys" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">ВКонтакте</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>ВКонтакте</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="https://instagram.com/gekkotoys" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Instagram</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="https://t.me/gekkotoys" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">Telegram</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Telegram</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Тёмная тема
              </Label>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 ГЕККО ТОЙС. Все права защищены.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary text-muted-foreground">
              Политика конфиденциальности
            </a>
            <a href="#" className="transition-colors hover:text-primary text-muted-foreground">
              Условия использования
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
