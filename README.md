# Ahoj — Pohostinství U Zvěřinů & zahrádka Ahoj

Česká jednostránková prezentace v TanStack Start, React a Tailwind CSS. Navigace používá kotvy. Bez databáze, přihlášení, tajných klíčů nebo serverových funkcí.

## První nasazení na GitHub Pages
1. V Lovable otevřete nastavení projektu → GitHub a propojte svůj účet a repozitář.
2. V GitHub repozitáři nastavte **Settings → Pages → Source → GitHub Actions**.
3. Na kartě **Actions** vyberte **Deploy static site to GitHub Pages** a klikněte na **Run workflow**. Nasazení se spouští pouze ručně.
4. Adresu zveřejněného webu najdete v dokončeném běhu nasazení.

Workflow instaluje Bun závislosti podle `bun.lock`, stáhne lokální kopie hlavní fotografie, předrenderuje stránku a publikuje pouze **`dist/client`** včetně `index.html`. Žádný serverový výstup se nenasazuje. Fotografie i písma jsou na Pages součástí statického výstupu; návštěvník nepotřebuje Lovable runtime ani externí fontové služby.

Základní cesta se automaticky odvozuje z `actions/configure-pages` a předá jako `PAGES_BASE_PATH`, například `/nazev-repozitare/`. Funguje také kořen domény. V náhledu Lovable zůstává základní cesta `/`.

## Úprava obsahu
- **Kontakty a oba sezónní rozpisy:** `src/data/pub.ts`. Aktualizujte data období i řádky hodin společně.
- **Texty stránky a ověřená nabídka:** `src/routes/index.tsx`.
- **Barvy, písmo a vzhled:** `src/styles.css`.
- **Fotografie:** hlavní snímek je ořez dodané fotografie, uložený jako spravované assety. `scripts/prepare-pages-assets.mjs` při nasazení vytvoří kopie v `public/pages-media`. Dvě doplňkové fotografie v `src/assets` jsou generované a na stránce označené jako ilustrační.

## Vývoj a kontrola mimo Lovable
Potřebujete Bun a Node.js 22.
```sh
bun install --frozen-lockfile
bun run dev
bun run test
```
Statický build pro podcestu:
```sh
node scripts/prepare-pages-assets.mjs
VITE_PAGES_BUILD=true PAGES_BASE_PATH=/moje-hospoda/ bun run build
mkdir -p /tmp/ahoj-pages/moje-hospoda
cp -R dist/client/. /tmp/ahoj-pages/moje-hospoda/
python3 -m http.server 8090 --directory /tmp/ahoj-pages
```
Otevřete `http://localhost:8090/moje-hospoda/` a vyzkoušejte obnovení, kotvy, fotografie a kontaktní odkazy. Build je předrender — Python slouží pouze statické soubory.

## Zdroje obsahu
Texty ověřeny na `ahojz.cz` dne 14. 11. 2026: letní a zimní provoz, kontakt, aktuálně a ceník. Převzaty pouze textové informace, nikoli grafika, fotografie nebo rozložení. Z původního ceníku jsou uvedeny jen jednoznačné položky a ceny s upozorněním na nutnost ověřit jejich aktuálnost. Historie a konkrétní jídla nebyly textově dostupné, proto nejsou uvedeny. Nejasné jednotky vína ani cenové varianty kávy se nepřebírají.
