import { chatlog } from '../../types/chatlog';
import './ChatPanel.css';

interface ChatPanelProps {
  chatlogs: chatlog[];
}

export const ChatPanel = ({ chatlogs }: ChatPanelProps) => {
  const displayText = chatlogs
    .reduce(
      (acc, current) =>
        acc +
        'prompt: ' +
        current.prompt +
        '\nresponse: ' +
        current.response +
        '\n\n',
      ''
    )
    .replace(/\n\n$/, '');
  return <div id='chat-panel-wrapper'>{displayText}</div>;
};
