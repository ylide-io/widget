// @ts-ignore
if (!window.Ylide) {
	// @ts-ignore
	const Ylide = (window.Ylide = (() => {
		function toArray<T>(iterable: ArrayLike<T>) {
			return Array.prototype.slice.call(iterable)
		}

		//

		function createElement<T extends keyof HTMLElementTagNameMap>(
			tagName: T,
			params?: {
				style?: Partial<CSSStyleDeclaration>
				innerHTML?: string
				appendTo?: HTMLElement
			},
		): HTMLElementTagNameMap[T] {
			const elem = document.createElement(tagName)

			if (params?.style) {
				Object.assign(elem.style, params.style)
			}

			if (params?.innerHTML) {
				elem.innerHTML = params.innerHTML
			}

			if (params?.appendTo) {
				params.appendTo.appendChild(elem)
			}

			return elem
		}

		function createSvg(
			content: string,
			params?: {
				style?: Partial<CSSStyleDeclaration>
				appendTo?: HTMLElement
			},
		) {
			const container = createElement('div', { innerHTML: content })
			const svg = container.children[0] as SVGSVGElement

			if (params?.style) {
				Object.assign(svg.style, params.style)
			}

			if (params?.appendTo) {
				params.appendTo.appendChild(svg)
			}

			return svg
		}

		//

		function createURLSearchParams(params: Record<string, any>) {
			const search = new URLSearchParams()

			Object.entries(params).forEach(([key, value]) => {
				if (value != null) {
					search.set(key, value)
				}
			})

			return search
		}

		//

		const root = createElement('div', {
			style: {
				position: 'relative',
				zIndex: '1',
			},
			appendTo: document.body,
		})

		return {
			init: () => {
				const buttons = toArray(document.getElementsByClassName('ylide-send-message')) as HTMLElement[]

				buttons.forEach(button => {
					Object.assign(button.style, {
						display: 'inline-flex',
						alignItems: 'center',
						padding: '4px 12px',
						font: '13px/1 sans-serif',
						color: '#222',
						background: '#ebe2f9',
						borderRadius: '4px',
						cursor: 'pointer',
					} as Partial<CSSStyleDeclaration>)

					createSvg(
						'<svg width="14" height="14" viewBox="0 0 37 37" xmlns="http://www.w3.org/2000/svg">' +
							'<path d="M0 10.4643C0 8.79078 1.35662 7.43416 3.0301 7.43416H3.23807C4.91155 7.43416 6.26817 8.79078 6.26817 10.4643C6.26817 12.1377 4.91154 13.4944 3.23807 13.4944H3.0301C1.35662 13.4944 0 12.1377 0 10.4643Z"/>' +
							'<path d="M7.66391 3.0301C7.66391 1.35662 9.02053 0 10.694 0H10.902C12.5755 0 13.9321 1.35662 13.9321 3.0301C13.9321 4.70358 12.5755 6.0602 10.902 6.0602H10.694C9.02053 6.0602 7.66391 4.70358 7.66391 3.0301Z"/>' +
							'<path d="M23.0425 3.0301C23.0425 1.35662 24.3991 0 26.0726 0H26.2806C27.954 0 29.3107 1.35662 29.3107 3.0301C29.3107 4.70358 27.954 6.0602 26.2806 6.0602H26.0726C24.3991 6.0602 23.0425 4.70358 23.0425 3.0301Z"/>' +
							'<path d="M30.7064 10.4643C30.7064 8.79078 32.063 7.43416 33.7365 7.43416H33.9445C35.6179 7.43416 36.9746 8.79078 36.9746 10.4643C36.9746 12.1377 35.6179 13.4944 33.9445 13.4944H33.7365C32.063 13.4944 30.7064 12.1377 30.7064 10.4643Z"/>' +
							'<path d="M23.0425 17.9475C23.0425 16.274 24.3991 14.9174 26.0726 14.9174H26.2806C27.954 14.9174 29.3107 16.274 29.3107 17.9475C29.3107 19.621 27.954 20.9776 26.2806 20.9776H26.0726C24.3991 20.9776 23.0425 19.621 23.0425 17.9475Z"/>' +
							'<path d="M15.3532 10.4643C15.3532 8.79078 16.7098 7.43416 18.3833 7.43416H18.5913C20.2647 7.43416 21.6214 8.79078 21.6214 10.4643C21.6214 12.1377 20.2647 13.4944 18.5913 13.4944H18.3833C16.7098 13.4944 15.3532 12.1377 15.3532 10.4643Z"/>' +
							'<path d="M15.3532 25.259C15.3532 23.5855 16.7098 22.2289 18.3833 22.2289H18.5913C20.2647 22.2289 21.6214 23.5855 21.6214 25.259C21.6214 26.9325 20.2647 28.2891 18.5913 28.2891H18.3833C16.7098 28.2891 15.3532 26.9325 15.3532 25.259Z"/>' +
							'<path d="M7.66391 17.9475C7.66391 16.274 9.02053 14.9174 10.694 14.9174H10.902C12.5755 14.9174 13.9321 16.274 13.9321 17.9475C13.9321 19.621 12.5755 20.9776 10.902 20.9776H10.694C9.02053 20.9776 7.66391 19.621 7.66391 17.9475Z"/>' +
							'<path d="M16.9671 7.81382L13.5626 4.52007V4.45854C13.2683 4.98993 12.8149 5.4266 12.2639 5.70901H12.3331L15.7365 9.00172V9.01095C16.0213 8.50824 16.4491 8.09212 16.9671 7.81382Z"/>' +
							'<path d="M23.4355 4.52007V4.50041C23.7302 5.01287 24.1742 5.43405 24.7106 5.70901H24.665L21.2616 9.00172V9.05348C20.9791 8.53515 20.5457 8.10563 20.0179 7.81951H20.0251L23.4355 4.52007Z"/>' +
							'<path d="M17.6304 13.3797V22.3435C17.9027 22.2689 18.1902 22.2289 18.4873 22.2289C18.7936 22.2289 19.0897 22.2714 19.3695 22.3506V13.3727C19.0897 13.4519 18.7936 13.4944 18.4873 13.4944C18.1902 13.4944 17.9027 13.4544 17.6304 13.3797Z"/>' +
							'<path d="M16.8949 22.6486L13.5522 19.4163V19.3946C13.2615 19.9107 12.8202 20.336 12.2853 20.6153H12.3331L15.6998 23.8725C15.9711 23.3637 16.3869 22.9389 16.8949 22.6486Z"/>' +
							'<path d="M8.02885 16.4532V16.5271C8.32109 15.9957 8.7722 15.5583 9.32095 15.2743H9.26708L5.8534 11.9717C5.55241 12.4782 5.1044 12.8926 4.56569 13.1605H4.6237L8.02885 16.4532Z"/>' +
							'<path d="M17.6304 28.1745V36.9746H19.3695V28.1674C19.0897 28.2466 18.7936 28.2891 18.4873 28.2891C18.1902 28.2891 17.9027 28.2491 17.6304 28.1745Z"/>' +
							'<path d="M21.2821 23.8865L24.672 20.6086H24.6764C24.1572 20.3344 23.727 19.9223 23.4387 19.4233L20.0944 22.6571C20.6003 22.9498 21.0137 23.3765 21.2821 23.8865Z"/>' +
							'<path d="M28.9658 16.4565V16.5644C28.6721 16.0119 28.208 15.558 27.6405 15.2676H27.7363L31.1298 11.9862C31.4307 12.4861 31.8752 12.8951 32.4088 13.1605H32.3744L28.9658 16.4565Z"/>' +
							'</svg>',
						{
							style: {
								margin: '0 8px 0 0',
								fill: 'currentColor',
							},
							appendTo: button,
						},
					)

					createElement('div', {
						innerHTML: 'Send Message',
						appendTo: button,
					})

					button.onclick = () => {
						const address = button.dataset.to
						const subject = button.dataset.subject

						if (!address) {
							return alert("Please set 'data-to' attribute")
						}

						Ylide.openSendMessagePopup({ address, subject })
					}
				})
			},

			openSendMessagePopup: (() => {
				const SEND_MESSAGE_POPUP_URL = 'http://localhost:3000/widget/send-message'

				let sendMessageContainer: HTMLDivElement | undefined
				let sendMessageIFrame: HTMLIFrameElement | undefined

				return (options: { address: string; subject?: string }) => {
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

					sendMessageIFrame.src = `${SEND_MESSAGE_POPUP_URL}?${createURLSearchParams({
						to: options.address,
						subject: options.subject,
					}).toString()}`
				}
			})(),
		}
	})())

	Ylide.init()
}
