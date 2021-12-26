import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/chatFeed";

const App = () => {
	return (
		<ChatEngine
			height="100vh"
			userName="popcorncondition"
			userSecret="123456"
			projectID="259764a8-6fb8-4308-8cbb-3b7d5f951d3e"
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;
