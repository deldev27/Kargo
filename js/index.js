document.getElementById('open-modal').addEventListener('click', function () {
	document.getElementById('modal').classList.add('open')
})

document.getElementById('close-modal').addEventListener('click', function () {
	document.getElementById('modal').classList.remove('open')
})

window.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		document.getElementById('modal').classList.remove('open')
	}
})

document.querySelector('#modal .modal__block').addEventListener('click', e => {
	e._isClickWithModal = true
})
document.getElementById('modal').addEventListener('click', e => {
	if (e._isClickWithModal) return
	e.currentTarget.classList.remove('open')
})
