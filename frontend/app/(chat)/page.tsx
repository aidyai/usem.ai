import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
// import { auth } from '@/auth'
import { Session } from '@/lib/types'
import { getMissingKeys } from '../actions'

export const metadata = {
  title: 'Next.js AI Chatbot'
}

export default async function IndexPage() {
  const id = nanoid()
  // const session = (await auth()) as Session
  // const missingKeys = await getMissingKeys()
  const dummyId = "dummy-id";
  const dummySession = { user: "dummy-user", status: "active" }; // Customize as needed
  const dummyMissingKeys = [];

  return (
    <AI initialAIState={{ chatId: dummyId, interactions: [], messages: [] }}>
      <Chat id={dummyId} session={dummySession} missingKeys={dummyMissingKeys} />
    </AI>
  );
};

