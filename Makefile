install: # запуск
		npm ci

brain-games: # запуск утилиты
		node bin/brain-games.js

brain-even: # запуск утилиты
		node bin/brain-even.js

brain-calc: # запуск утилиты
		node bin/brain-calc.js

brain-gcd: # запуск утилиты
		node bin/brain-gcd.js

brain-progression: # запуск утилиты
		node bin/brain-progression.js

brain-prime: # запуск утилиты
		node bin/brain-prime.js

publish:  # тестирование публикации пакета
		npm publish --dry-run

lint:
		npx eslint .
