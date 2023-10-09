import Head from "next/head";
import { Provider } from "react-redux";
import { HomeLayout } from "shared";
import RootLayout from "shared/Layouts/RootLayout/RootLayout";
import Home from "./home";
const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Voidzzle | Next12</title>
        <meta
          name="description"
          content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
        />
      </Head>
      <main className=" p-2">
        {/* <Dashboard /> */}
        <Home />
        {/* <NewLetter /> */}
        {/* <Settings /> */}
      </main>
    </>
  );
};

IndexPage.getLayout = (page) => {
  return (
    <RootLayout>
      <HomeLayout>{page}</HomeLayout>
    </RootLayout>
  );
};

export default IndexPage;
