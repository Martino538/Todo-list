export default function Tabs({ todos, selectedTab, setSelectedTab }) {
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((item) => !item.complete).length
            : todos.filter((item) => item.complete).length;

        return (
          <button key={tabIndex} onClick={() => setSelectedTab(tab)} className={"tab-button " + (tab === selectedTab ? 'tab-selected' : '')}>
            <h4>
              {tab}
              <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}
