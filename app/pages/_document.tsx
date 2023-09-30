import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Add your custom tags and meta information here */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
