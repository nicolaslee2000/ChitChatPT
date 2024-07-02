import './ChatPanel.css';

export const ChatPanel = ({ displayText }: { displayText: string }) => {
  return <div id='chat-panel-wrapper'>{displayText}</div>;
};
