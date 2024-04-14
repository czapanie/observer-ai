# Poradnik pracy z repozytorium

## Podział plików

Ponieważ projekt wymaga zastosowania dwóch różnych technologii - JavaScript do stworzenia biblioteki i Python do wytrenowania modelu AI - istnieje konieczność
wydzielenia przestrzeni roboczej pod obie te technologie. Dlatego został stworzony podział na dwie ścieżki:

- `dev/` - kod odpowiedzialny za trenowanie modelu
- `lib/` - kod korzystający z modelu i implementujący API
