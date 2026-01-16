# TRV Regulator Card

Custom Lovelace card pro integraci **TRV Regulator**. 

## ✨ Funkce

- 📊 **Real-time zobrazení stavu** - aktuální a cílová teplota, stav topení
- 📈 **Progress topení** - vizuální ukazatel průběhu s časem
- 🎓 **Učení** - zobrazení procesu adaptivního učení
- 📉 **Grafy historie** - překmit a doba topení posledních cyklů
- 📊 **Statistiky** - úspěšnost, průměrné hodnoty
- 🔄 **Reset parametrů** - tlačítko pro reset naučených dat
- 🌍 **Lokalizace** - čeština a angličtina
- 🌓 **Dark/Light mode** - automatická podpora témat

## 📸 Screenshot

![TRV Regulator Card](https://via.placeholder.com/600x400.png? text=TRV+Regulator+Card)

## 🚀 Instalace

### HACS (doporučeno)

1. Otevřete HACS v Home Assistant
2. Klikněte na "Frontend"
3. Klikněte na ikonu s třemi tečkami v pravém horním rohu
4. Vyberte "Custom repositories"
5. Přidejte URL: `https://github.com/navratilpetr/trv-regulator-card`
6. Kategorie: `Lovelace`
7. Klikněte na "Add"
8. Najděte "TRV Regulator Card" a klikněte na "Download"
9. Restartujte Home Assistant

### Manuální instalace

1. Stáhněte `trv-regulator-card.js` z [nejnovější release](https://github.com/navratilpetr/trv-regulator-card/releases)
2. Zkopírujte soubor do `<config>/www/trv-regulator-card.js`
3. Přidejte resource do Lovelace:
   - Settings → Dashboards → Resources
   - URL: `/local/trv-regulator-card.js`
   - Type: JavaScript Module

## ⚙️ Konfigurace

### Minimální konfigurace

```yaml
type: custom:trv-regulator-card
entity: sensor.trv_regulator_kuchyn_state
```

### Plná konfigurace

```yaml
type: custom:trv-regulator-card
entity: sensor.trv_regulator_kuchyn_state
name:  Kuchyň
show_graphs: true
show_stats: true
show_learning: true
show_progress: true
graph_cycles: 20
language: cs
```

### Parametry

| Parametr | Typ | Výchozí | Popis |
|----------|-----|---------|-------|
| `entity` | string | **povinné** | State sensor entity ID |
| `name` | string | automaticky | Název místnosti |
| `show_graphs` | boolean | `true` | Zobrazit grafy historie |
| `show_stats` | boolean | `true` | Zobrazit statistiky |
| `show_learning` | boolean | `true` | Zobrazit stav učení |
| `show_progress` | boolean | `true` | Zobrazit progress při topení |
| `graph_cycles` | number | `20` | Počet cyklů v grafech |
| `language` | string | `cs` | Jazyk (`cs` nebo `en`) |

## 💡 Tipy

- Karta automaticky detekuje všechny související senzory podle base entity
- Pro vice místností přidejte více karet s různými entitami
- Grafy se aktualizují automaticky při změně dat

## 🐛 Problémy? 

Nahlaste issue na [GitHubu](https://github.com/navratilpetr/trv-regulator-card/issues).