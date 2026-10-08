import Header from "@/components/Header";
import TradingViewWidget from "@/components/TradingViewWidget";
import {
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  MARKET_OVERVIEW_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
} from "@/lib/constants";

const SCRIPT_URL = "https://s3.tradingview.com/external-embedding/embed-widget-";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <Header />
      <main className="container home-wrapper flex flex-1 flex-col gap-10 py-8">
        <section className="home-section">
          <div className="home-span-1">
            <TradingViewWidget
              title="Market Overview"
              scriptUrl={`${SCRIPT_URL}market-overview.js`}
              config={MARKET_OVERVIEW_WIDGET_CONFIG}
              className="custom-chart"
              height={600}
            />
          </div>
          <div className="home-span-2">
            <TradingViewWidget
              title="Stock Heatmap"
              scriptUrl={`${SCRIPT_URL}stock-heatmap.js`}
              config={HEATMAP_WIDGET_CONFIG}
              className="custom-chart"
              height={600}
            />
          </div>
        </section>
        <section className="home-section">
          <div className="home-span-1 h-full">
            <TradingViewWidget
              title="Top Stories"
              scriptUrl={`${SCRIPT_URL}timeline.js`}
              config={TOP_STORIES_WIDGET_CONFIG}
              className="custom-chart"
              height={600}
            />
          </div>
          <div className="home-span-2 h-full">
            <TradingViewWidget
              title="Market Quotes"
              scriptUrl={`${SCRIPT_URL}market-quotes.js`}
              config={MARKET_DATA_WIDGET_CONFIG}
              className="custom-chart"
              height={600}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
