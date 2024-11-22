// customWebRTCTypes.d.ts
export interface CustomRTCSessionDescriptionInit {
  type: "offer" | "answer" | "pranswer" | "rollback";
  sdp?: string;
}

export interface CustomRTCIceCandidate {
  candidate: string;
  sdpMid?: string | null;
  sdpMLineIndex?: number | null;
}
