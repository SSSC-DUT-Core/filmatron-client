import Footer from "@/src/components/footer";
import { MainNav } from "@/src/components/nav";
const customBackgroundImage = 'url("/assets/images/BG.png")';



export default async function SetupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            style={{
                // backgroundColor: 'black',
                // backgroundImage: customBackgroundImage,
                backgroundSize: "cover", // Adjust this property as needed
                backgroundRepeat: "no-repeat", // Adjust this property as needed
                backgroundPosition: "center", // Adjust this property as needed
                // Add any other background-related styles here
                minHeight: "100vh", // Ensure the container covers the full viewport height

                backgroundColor: "black",
            }}
        >
            <MainNav />
            {children}
            <Footer />
        </div>
    );
}
