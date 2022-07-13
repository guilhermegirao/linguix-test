import type { NextPage } from "next";

import { Image } from "@nextui-org/react";

import AppContainer from "@/components/Container/Container";
import Content from "@/components/Content/Content";
import SigninForm from "@/components/SigninForm/SigninForm";

const Home: NextPage = () => {
  return (
    <AppContainer>
      <Content>
        <Image
          width={400}
          height={200}
          src="dummy.png"
          alt="Placeholder Image"
          objectFit="cover"
          showSkeleton
        />
        <SigninForm />
      </Content>
    </AppContainer>
  );
};

export default Home;
