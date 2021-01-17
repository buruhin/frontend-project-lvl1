install: # запуск
		npm install

brain-games: # запуск утилиты
		node bin/brain-games.js

brain-even: # запуск утилиты
		node bin/brain-even.js

publish:  # тестирование публикации пакета
		npm publish --dry-run

lint:
		npx eslint .