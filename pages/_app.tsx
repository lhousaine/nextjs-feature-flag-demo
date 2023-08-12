import { useEffect, useState } from "react";
import { FeatureToggle } from "../components/FeatureToggle";
import "../styles/globals.css";
import { fetchFeatures } from "../services/FeatureToggle";

function MyApp({ Component, pageProps }) {
  const [enabledFeatures, setFeatures] = useState<string[]>([]);

  const processFeatures = async () => {
    const features = await fetchFeatures();

    setFeatures(features);
  };

  useEffect(() => {
    processFeatures();
  }, []);

  return (
    <FeatureToggle enabledFeatures={enabledFeatures}>
      <Component {...pageProps} />
    </FeatureToggle>
  );
}

export default MyApp;
