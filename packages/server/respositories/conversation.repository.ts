// Implementation detail
const conversations = new Map<string, string>();

// Eport public interface
export const conversationRepository = {
   getLastResponseId(conversationId: string) {
      return conversations.get(conversationId);
   },
   setLastResponseId(conversationId: string, responseId: string) {
      return conversations.set(conversationId, responseId);
   },
};
