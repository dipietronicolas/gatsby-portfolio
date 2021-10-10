import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Presentation from "../components/Presentation/Presentation";
import Appbar from "../components/Appbar/Appbar";
import { ColorModeProvider } from "../context/colorModeContext";
import Layout from "../components/Layout/Layout";

// markup
const IndexPage = () => {


  return (
    <ColorModeProvider>
      <Layout>
        <CssBaseline />
        <Appbar />
        <Presentation />
      </Layout>
    </ColorModeProvider>
  )
}

export default IndexPage
