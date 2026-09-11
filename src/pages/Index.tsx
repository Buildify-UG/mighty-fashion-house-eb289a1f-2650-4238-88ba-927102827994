import { Button } from "@/components/ui/button";
import { ChevronRight, ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const collections = [
    {
      id: 1,
      name: "Autumn Elegance",
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=700&fit=crop",
      price: "$2,850",
    },
    {
      id: 2,
      name: "Silk Couture",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=700&fit=crop",
      price: "$3,200",
    },
    {
      id: 3,
      name: "Minimalist Chic",
      image:
        "https://images.unsplash.com/photo-1539533057440-7bf6b1c5d548?w=600&h=700&fit=crop",
      price: "$2,450",
    },
    {
      id: 4,
      name: "Velvet Dreams",
      image:
        "https://images.unsplash.com/photo-1534215754734-18e50fa1cf11?w=600&h=700&fit=crop",
      price: "$3,500",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">MIGHTY</div>
          <div className="flex gap-8 items-center">
            <button className="text-sm hover:text-secondary transition">
              Collections
            </button>
            <button className="text-sm hover:text-secondary transition">
              About
            </button>
            <button className="text-sm hover:text-secondary transition">+2349123883402</button>
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-secondary transition" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-secondary font-semibold tracking-widest uppercase text-sm">
                  Luxury Fashion House
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Crafted for the
                  <span className="text-secondary"> Exceptional</span>
                </h1>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Experience timeless elegance and contemporary design. Each piece
                is meticulously crafted with the finest materials and
                uncompromising attention to detail.
              </p>

              <div className="flex gap-4 pt-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base rounded-none">
                  Explore Collection
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-base rounded-none"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=900&fit=crop"
                alt="Featured collection"
                className="w-full h-auto"
              />
              <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur px-6 py-4 border border-border">
                <p className="text-sm text-muted-foreground">New Arrival</p>
                <p className="text-2xl font-bold">Autumn 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-6 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="text-3xl font-bold text-secondary">Est. 1995</div>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to redefine luxury fashion through
                innovation and tradition.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-3xl font-bold text-secondary">Global</div>
              <p className="text-muted-foreground leading-relaxed">
                Presence in 45 countries with flagship boutiques in the world's
                most prestigious locations.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-3xl font-bold text-secondary">Artisan</div>
              <p className="text-muted-foreground leading-relaxed">
                Handcrafted by master artisans using sustainable materials and
                ethical production methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">Featured Collections</h2>
            <p className="text-muted-foreground">
              Discover our latest curated selections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer space-y-4"
              >
                <div className="relative overflow-hidden bg-secondary/5 aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-4 right-4 bg-background/90 backdrop-blur p-3 rounded-full hover:bg-background transition"
                  >
                    <Heart
                      className="w-5 h-5"
                      fill={
                        favorites.includes(item.id)
                          ? "currentColor"
                          : "none"
                      }
                      color={
                        favorites.includes(item.id)
                          ? "hsl(30, 100%, 50%)"
                          : "currentColor"
                      }
                    />
                  </button>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-lg group-hover:text-secondary transition">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.price}</p>
                  <button className="w-full mt-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition rounded-none">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Stay Updated</h2>
          <p className="text-primary-foreground/80">
            Subscribe to receive exclusive previews and early access to new
            collections
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-primary-foreground text-primary placeholder-muted-foreground rounded-none focus:outline-none"
            />
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 rounded-none">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-lg mb-4">MIGHTY</p>
              <p className="text-sm text-muted-foreground">
                Luxury fashion crafted with purpose
              </p>
            </div>
            <div>
              <p className="font-semibold mb-4 text-sm">Shop</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-secondary transition">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition">
                    Sale
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4 text-sm">Company</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-secondary transition">+2349123883402</a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4 text-sm">Legal</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-secondary transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 Mighty Fashion House. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition">
                Instagram
              </a>
              <a href="#" className="hover:text-secondary transition">
                Twitter
              </a>
              <a href="#" className="hover:text-secondary transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
