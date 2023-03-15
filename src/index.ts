// noinspection JSUnusedGlobalSymbols
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Ylide = (() => {
	function createElement<T extends keyof HTMLElementTagNameMap>(
		tagName: T,
		params: {
			style?: Partial<CSSStyleDeclaration>
			appendTo?: HTMLElement
		},
	): HTMLElementTagNameMap[T] {
		const elem = document.createElement(tagName)

		if (params.style) {
			Object.assign(elem.style, params.style)
		}

		if (params.appendTo) {
			params.appendTo.appendChild(elem)
		}

		return elem
	}

	const root = createElement('div', {
		style: {
			position: 'relative',
			zIndex: '1',
		},
		appendTo: document.body,
	})

	return {
		openSendMessagePopup: (() => {
			const SEND_MESSAGE_POPUP_URL = 'http://localhost:3000/widget/send-message'

			let sendMessageContainer: HTMLDivElement | undefined
			let sendMessageIFrame: HTMLIFrameElement | undefined

			return (address: string) => {
				if (sendMessageContainer) {
					root.removeChild(sendMessageContainer)
				}

				sendMessageContainer = createElement('div', {
					style: {
						position: 'fixed',
						right: '36px',
						bottom: '0',
						width: '500px',
						height: '520px',
						maxWidth: '100%',
						maxHeight: '100%',
						overflow: 'hidden',
						borderRadius: '8px 8px 0 0',
						boxShadow: '4px 4px 24px rgba(26,179,148,.4), -16px -8px 64px rgba(151,71,255,.25)',
					},
					appendTo: root,
				})

				sendMessageIFrame = createElement('iframe', {
					style: {
						width: '100%',
						height: '100%',
						border: '0',
					},
					appendTo: sendMessageContainer,
				})

				sendMessageIFrame.src = `${SEND_MESSAGE_POPUP_URL}?to=${address}`
			}
		})(),
	}
})()
