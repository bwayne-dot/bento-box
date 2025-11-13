import { Button } from "./components/ui/button";
import logoImage from "figma:asset/091ea9f3f839158d850281821bce84c54c69df26.png";
import heroImage from "figma:asset/8831c2d790bb2e1239b070e1ae27c1ad21fd6f87.png";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logoImage}
              alt="TaxFolio"
              className="h-10"
            />
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        {/* Centered Hero Text */}
        <div className="text-center mb-20">
          <h1
            className="text-4xl lg:text-5xl font-extrabold"
            style={{ lineHeight: "1.2" }}
          >
            You Didn't Start Your Business to Become
            <br />
            an Accountant - and You Don't Have To!
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-700 mt-4 font-semibold">
            BentoBox keeps everything organized automatically,
            <br />
            so you can focus on what matters.
          </p>
        </div>

        {/* Two Column Layout - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mt-16 max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="space-y-6 max-w-lg">
            <p className="text-lg">
              <strong>
                BentoBox is the effortless way to keep your business finances running smoothly — <em>automagically!</em>
              </strong>
            </p>

            <p className="text-lg text-gray-600">
              Send every invoice, bill, or receipt by email, text, upload, or bank link. BentoBox reads, categorizes, and tracks everything — showing income, expenses, and profit in plain English. It even spots what's missing or unusual.
            </p>

            <p className="text-lg text-gray-600">
              BentoBox doesn't just record what happened — it helps you stay ahead. It flags odd spending, detects overpriced vendors, and predicts upcoming bills and taxes. You'll always know where you stand, and if you need to share data with your CPA, reports are just a click away.
            </p>

            <p className="text-lg">
              <strong>No accounting software. No setup. Just answers.</strong>
            </p>

            <div className="flex gap-4 pt-4">
              <Button size="lg">Get Started</Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative max-w-md">
            <img
              src={heroImage}
              alt="My CPA Loves Me"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}