import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { Gallery } from "@/components/gallery";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <Section
          id="hero"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/20"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Transform Your Look with
              <span className="text-primary block">Hair by Grace</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional hair salon specializing in cuts, coloring,
              extensions, and styling. With over 30 years of experience, Grace
              brings expertise from Korea, Japan, UK, and USA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#contact">Book Appointment</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                asChild
              >
                <a href="#gallery">View Our Work</a>
              </Button>
            </div>
          </div>
        </Section>

        {/* About Section */}
        <Section id="about" background="muted">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                About Grace
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Established in 1990, Grace has over 30 years of experience as a
                talented hair stylist. She graduated from Korea Beauty Art
                College in Seoul, South Korea, and worked as a hairstylist for
                15 years there.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Grace&apos;s international training includes studying hair in
                Japan (1995), attending Toni & Guy London (1998), and graduating
                from Vidal Sassoon (2003). She came to the US in 2002 and
                obtained her Cosmetology License.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With expertise in Asian Style, European Style, and American
                Style, Grace can create any look her customers desire. She now
                works as a freelancer with a genuine passion for making hair
                look absolutely beautiful and strong.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    30+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    4.9★
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Rating (369 reviews)
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/haircut-sample-14.jpg"
                alt="Grace at work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section id="services" background="muted">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Services & Specialties
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional hair services with 20% off all chemical treatments.
              All human hair extensions starting at $200 and up.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Hair Coloring
              </h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• Ombre/Balayage Color</li>
                <li>• Highlights & Lowlights</li>
                <li>• Fashion Colors (pink, ash tones)</li>
                <li>• Magic Straight</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Hair Treatments
              </h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• Digital Perm</li>
                <li>• Keratin Treatment ($150)</li>
                <li>• Hair BB Cream ($150)</li>
                <li>• Deep Treatment</li>
                <li>• Scalp Treatment</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Hair Extensions
              </h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• Glue Extensions</li>
                <li>• Keratin Extensions</li>
                <li>• Braid Extensions</li>
                <li>• All Human Hair</li>
                <li>• Starting at $200+</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Styling Services
              </h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• Haircuts & Styling</li>
                <li>• Blow Dry & Hot Tools</li>
                <li>• Wedding Hair & Makeup</li>
                <li>• Updo Styling</li>
                <li>• Head Spa</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Special Offers
              </h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• 20% Off All Chemical Services</li>
                <li>• Color + Perm Packages</li>
                <li>• Curling Iron Services</li>
                <li>• Clinic Services</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                International Expertise
              </h3>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• Asian Style</li>
                <li>• European Style</li>
                <li>• American Style</li>
                <li>• Custom Styling</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Gallery Section */}
        <Section id="gallery">
          <Gallery />
        </Section>

        {/* Contact Section */}
        <Section id="contact" background="primary">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">(213) 369-1782</p>
                    <p className="text-sm text-muted-foreground italic">
                      Please text us instead of calling
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">
                      300 S Hobart Blvd., Suite 102
                      <br />
                      Los Angeles, CA 90020
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Wednesday: 10:00 AM - 8:00 PM</p>
                      <p>Thursday - Sunday: Please call for hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
