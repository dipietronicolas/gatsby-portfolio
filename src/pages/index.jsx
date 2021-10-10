import * as React from "react";
import Layout from "../components/Layout/Layout";
import Presentation from "../components/Presentation/Presentation";
import Projects from "../components/Projects/Projects";
import Appbar from "../components/Appbar/Appbar";
import CssBaseline from "@mui/material/CssBaseline";
import { ColorModeProvider } from "../context/colorModeContext";

// markup
const IndexPage = () => {


  return (
    <ColorModeProvider>
      <Layout>
        <CssBaseline />
        <Appbar />
        <Presentation />
        <Projects />
      </Layout>
    </ColorModeProvider>
  )
}

export default IndexPage
