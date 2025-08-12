import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, CreditCard, Shield, Clock } from "lucide-react";

const Payment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const packageType = searchParams.get('package') || 'Hybrid Package';
  const price = searchParams.get('price') || '₹1,999';
  
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock payment processing
    toast({
      title: "Payment Successful!",
      description: "Your order has been confirmed. We'll contact you within 4 hours to get started.",
    });

    // Redirect to success page or home
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-3xl font-bold text-foreground">Complete Your Payment</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-primary" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-card-foreground">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={paymentData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={paymentData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="+91 9876543210"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-card-foreground">Card Information</h3>
                    <div>
                      <Label htmlFor="cardHolder">Cardholder Name *</Label>
                      <Input
                        id="cardHolder"
                        name="cardHolder"
                        value={paymentData.cardHolder}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Name on card"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date *</Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          value={paymentData.expiryDate}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          value={paymentData.cvv}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="123"
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-3 rounded-lg shadow-primary transition-all duration-300 hover:scale-105"
                  >
                    Complete Payment {price}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-card-foreground font-medium">{packageType}</span>
                  <span className="text-primary font-bold">{price}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-card-foreground">Total</span>
                    <span className="text-primary">{price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security & Trust */}
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-lg text-card-foreground flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Secure Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">SSL encrypted secure payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">48-hour delivery guarantee</span>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-lg text-card-foreground">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Professional content creation</li>
                  <li>• 48-hour delivery</li>
                  <li>• One round of revisions</li>
                  <li>• Priority support</li>
                  <li>• Brand consistency guarantee</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;