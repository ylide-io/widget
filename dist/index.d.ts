declare const Ylide: {
    init: (options?: {
        ylideHubUrl?: string | undefined;
    } | undefined) => void;
    hasPublicKeys: (address: string) => Promise<boolean>;
    openSendMessagePopup: (options: {
        address: string;
        subject?: string;
    }) => void;
    openMailboxPopup: () => void;
    showFloatingMailboxButton: () => void;
};
export default Ylide;
