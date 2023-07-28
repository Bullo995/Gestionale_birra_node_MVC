-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Lug 27, 2023 alle 11:01
-- Versione del server: 10.4.28-MariaDB
-- Versione PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_birra`
--
CREATE DATABASE IF NOT EXISTS `db_birra` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_birra`;

-- --------------------------------------------------------

--
-- Struttura della tabella `anagrafiche_articoli`
--

CREATE TABLE `anagrafiche_articoli` (
  `id_articolo` int(20) NOT NULL,
  `id_sottocategoria` int(20) NOT NULL,
  `nome_articolo` varchar(100) NOT NULL,
  `descrizione_articolo` text NOT NULL,
  `capacita` int(20) NOT NULL,
  `id_unita_misura` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `anagrafiche_articoli`
--

INSERT INTO `anagrafiche_articoli` (`id_articolo`, `id_sottocategoria`, `nome_articolo`, `descrizione_articolo`, `capacita`, `id_unita_misura`) VALUES
(3, 3, 'Luppolo-Aurora-Slovenia', '', 5, 2),
(4, 3, 'Luppolo-Kent Golding-Regno unito', '', 5, 2),
(5, 5, 'Malto di frumento, scuro 15 EBC', '', 20, 2),
(6, 5, 'Malto d\'orzo Viking Pilsner', '', 10, 2),
(7, 4, 'Acqua', '', 20, 1),
(8, 10, 'Lievito-Saccharomyces cerevisiae-sottovuoto o,5 kg', '', 10, 2),
(9, 10, 'Lievito-Saccharomyces uvarum (Carlsbergensis)-sottovuoto o,5 kg', '', 10, 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `anagrafiche_prodotti`
--

CREATE TABLE `anagrafiche_prodotti` (
  `id_prodotto` int(20) NOT NULL,
  `nome_prodotto` varchar(100) NOT NULL,
  `descrizione_prodotto` text NOT NULL,
  `capacita` decimal(10,3) NOT NULL,
  `id_unita_misura` int(20) NOT NULL,
  `prezzo_listino` decimal(11,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `anagrafiche_prodotti`
--

INSERT INTO `anagrafiche_prodotti` (`id_prodotto`, `nome_prodotto`, `descrizione_prodotto`, `capacita`, `id_unita_misura`, `prezzo_listino`) VALUES
(1, 'Lager Vetro 500ml', '', 0.500, 1, 6.00),
(2, 'Dunkler bock, fusto 20L', '', 20.000, 1, 240.00),
(3, 'American pale ale, vetro 750ml', '', 0.750, 1, 10.00);

-- --------------------------------------------------------

--
-- Struttura della tabella `categorie`
--

CREATE TABLE `categorie` (
  `id_categoria` int(20) NOT NULL,
  `categoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `categorie`
--

INSERT INTO `categorie` (`id_categoria`, `categoria`) VALUES
(1, 'Materie prime'),
(2, 'Prodotti pulizia '),
(3, 'Cancelleria ufficio');

-- --------------------------------------------------------

--
-- Struttura della tabella `causali`
--

CREATE TABLE `causali` (
  `id_causale` int(20) NOT NULL,
  `causale` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `causali`
--

INSERT INTO `causali` (`id_causale`, `causale`) VALUES
(1, 'Produzione'),
(2, 'Scarto'),
(3, 'Consumo');

-- --------------------------------------------------------

--
-- Struttura della tabella `clienti_fornitori`
--

CREATE TABLE `clienti_fornitori` (
  `id_cliente_fornitore` int(20) NOT NULL,
  `ragione_sociale` varchar(100) NOT NULL,
  `indirizzo` varchar(100) NOT NULL,
  `cap` char(5) NOT NULL,
  `citta` varchar(30) NOT NULL,
  `sigla_provincia` char(2) NOT NULL,
  `partita_iva` char(11) NOT NULL,
  `numero_telefono` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `clienti_fornitori`
--

INSERT INTO `clienti_fornitori` (`id_cliente_fornitore`, `ragione_sociale`, `indirizzo`, `cap`, `citta`, `sigla_provincia`, `partita_iva`, `numero_telefono`, `email`) VALUES
(1, 'imedia', 'via dell\'artigianato, 15', '09122', 'Cagliari', 'CA', '02260740929', '3737550389', 'amministrazione@imedia.it'),
(2, 'Grossista materie', 'Via cagliari, 21', '09016', 'Iglesias', 'SU', '13284568914', '3333333333', 'Grossistamaterie@gmail.com'),
(3, 'Compratore Birra', 'Via roma, 54', '09125', 'Cagliari', 'CA', '78943337546', '3338888888', 'CompratoreBirra@gmail.com');

-- --------------------------------------------------------

--
-- Struttura della tabella `lotti_produzione`
--

CREATE TABLE `lotti_produzione` (
  `id_lotto_produzione` int(20) NOT NULL,
  `id_prodotto` int(20) NOT NULL,
  `data_produzione` date NOT NULL,
  `data_scadenza` date NOT NULL,
  `codice_lotto` varchar(10) NOT NULL,
  `quantita` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `lotti_produzione`
--

INSERT INTO `lotti_produzione` (`id_lotto_produzione`, `id_prodotto`, `data_produzione`, `data_scadenza`, `codice_lotto`, `quantita`) VALUES
(1, 3, '2023-07-24', '2025-07-16', '4836468792', 20),
(2, 2, '2023-07-01', '2025-07-16', '6555666486', 5);

-- --------------------------------------------------------

--
-- Struttura della tabella `magazzino_articoli`
--

CREATE TABLE `magazzino_articoli` (
  `id_articolo_magazzino` int(20) NOT NULL,
  `id_articolo` int(20) NOT NULL,
  `data_movimento` date NOT NULL,
  `quantita_movimento` int(20) NOT NULL,
  `prezzo_articolo` decimal(11,2) NOT NULL,
  `codice_lotto_articolo` varchar(20) NOT NULL,
  `data_scadenza` date NOT NULL,
  `id_fornitore` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `magazzino_articoli`
--

INSERT INTO `magazzino_articoli` (`id_articolo_magazzino`, `id_articolo`, `data_movimento`, `quantita_movimento`, `prezzo_articolo`, `codice_lotto_articolo`, `data_scadenza`, `id_fornitore`) VALUES
(2, 3, '2023-07-24', 10, 300.00, '5863616835', '2024-07-18', 2),
(3, 6, '2023-07-13', 5, 600.15, '53769356', '2023-09-21', 2),
(4, 7, '2023-07-02', 20, 200.41, '83143356', '2027-12-16', 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `sottocategorie`
--

CREATE TABLE `sottocategorie` (
  `id_sottocategoria` int(20) NOT NULL,
  `sottocategoria` varchar(100) NOT NULL,
  `id_categoria` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `sottocategorie`
--

INSERT INTO `sottocategorie` (`id_sottocategoria`, `sottocategoria`, `id_categoria`) VALUES
(3, 'Luppolo', 1),
(4, 'Acqua', 1),
(5, 'Cereale', 1),
(6, 'Penne', 3),
(7, 'Gomme', 3),
(8, 'Secchi', 2),
(9, 'Spugne', 2),
(10, 'Lievito', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `unita_misura`
--

CREATE TABLE `unita_misura` (
  `id_unita_misura` int(20) NOT NULL,
  `unita_misura` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `unita_misura`
--

INSERT INTO `unita_misura` (`id_unita_misura`, `unita_misura`) VALUES
(1, 'Litri'),
(2, 'Kilogrammi');

-- --------------------------------------------------------

--
-- Struttura della tabella `uscite_magazzino`
--

CREATE TABLE `uscite_magazzino` (
  `ID_uscita_magazzino` int(20) NOT NULL,
  `id_articolo_magazzino` int(20) NOT NULL,
  `id_lotto_produzione` int(20) DEFAULT NULL,
  `id_causale` int(20) NOT NULL,
  `quantita` int(20) NOT NULL,
  `data_uscita` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `uscite_magazzino`
--

INSERT INTO `uscite_magazzino` (`ID_uscita_magazzino`, `id_articolo_magazzino`, `id_lotto_produzione`, `id_causale`, `quantita`, `data_uscita`) VALUES
(1, 2, 1, 1, 5, '2023-07-27 09:48:01'),
(2, 4, 1, 1, 10, '2023-07-27 09:48:01');

-- --------------------------------------------------------

--
-- Struttura della tabella `vendite`
--

CREATE TABLE `vendite` (
  `id_lotto_produzione` int(20) NOT NULL,
  `id_cliente` int(20) NOT NULL,
  `data_vendita` date NOT NULL,
  `quantita` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `vendite`
--

INSERT INTO `vendite` (`id_lotto_produzione`, `id_cliente`, `data_vendita`, `quantita`) VALUES
(1, 3, '2023-07-24', 10),
(2, 3, '2023-07-27', 2);

-- --------------------------------------------------------

--
-- Struttura stand-in per le viste `v_cbo_articoli_magazzino`
-- (Vedi sotto per la vista effettiva)
--
CREATE TABLE `v_cbo_articoli_magazzino` (
`id_articolo_magazzino` int(20)
,`articolo_lotto` varchar(135)
);

-- --------------------------------------------------------

--
-- Struttura per vista `v_cbo_articoli_magazzino`
--
DROP TABLE IF EXISTS `v_cbo_articoli_magazzino`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_cbo_articoli_magazzino`  AS SELECT `ma`.`id_articolo_magazzino` AS `id_articolo_magazzino`, concat(`aa`.`nome_articolo`,' (',`ma`.`codice_lotto_articolo`,'-',`ma`.`data_scadenza`,' )') AS `articolo_lotto` FROM (`magazzino_articoli` `ma` join `anagrafiche_articoli` `aa` on(`ma`.`id_articolo` = `aa`.`id_articolo`)) ;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `anagrafiche_articoli`
--
ALTER TABLE `anagrafiche_articoli`
  ADD PRIMARY KEY (`id_articolo`),
  ADD KEY `FK_anagrafica_articoli_sottocategoria` (`id_sottocategoria`),
  ADD KEY `FK_anagrafica_articoli_unita_misura` (`id_unita_misura`);

--
-- Indici per le tabelle `anagrafiche_prodotti`
--
ALTER TABLE `anagrafiche_prodotti`
  ADD PRIMARY KEY (`id_prodotto`),
  ADD KEY `FK_prodotto_unita_misura` (`id_unita_misura`);

--
-- Indici per le tabelle `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indici per le tabelle `causali`
--
ALTER TABLE `causali`
  ADD PRIMARY KEY (`id_causale`);

--
-- Indici per le tabelle `clienti_fornitori`
--
ALTER TABLE `clienti_fornitori`
  ADD PRIMARY KEY (`id_cliente_fornitore`);

--
-- Indici per le tabelle `lotti_produzione`
--
ALTER TABLE `lotti_produzione`
  ADD PRIMARY KEY (`id_lotto_produzione`),
  ADD KEY `FK_lotto_produzione_prodotto` (`id_prodotto`);

--
-- Indici per le tabelle `magazzino_articoli`
--
ALTER TABLE `magazzino_articoli`
  ADD PRIMARY KEY (`id_articolo_magazzino`),
  ADD KEY `FK_articolo_magazzino_articolo` (`id_articolo`),
  ADD KEY `FK_articolo_magazzino_cliente_fornitore` (`id_fornitore`);

--
-- Indici per le tabelle `sottocategorie`
--
ALTER TABLE `sottocategorie`
  ADD PRIMARY KEY (`id_sottocategoria`),
  ADD KEY `FK_sottocategoria_categoria` (`id_categoria`);

--
-- Indici per le tabelle `unita_misura`
--
ALTER TABLE `unita_misura`
  ADD PRIMARY KEY (`id_unita_misura`);

--
-- Indici per le tabelle `uscite_magazzino`
--
ALTER TABLE `uscite_magazzino`
  ADD PRIMARY KEY (`ID_uscita_magazzino`),
  ADD KEY `FK_uscita_magazzino_causale` (`id_causale`),
  ADD KEY `FK_uscita_magazzino_lotto_produzione` (`id_lotto_produzione`);

--
-- Indici per le tabelle `vendite`
--
ALTER TABLE `vendite`
  ADD PRIMARY KEY (`id_lotto_produzione`),
  ADD KEY `FK_vendita_clienti` (`id_cliente`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `anagrafiche_articoli`
--
ALTER TABLE `anagrafiche_articoli`
  MODIFY `id_articolo` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT per la tabella `anagrafiche_prodotti`
--
ALTER TABLE `anagrafiche_prodotti`
  MODIFY `id_prodotto` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id_categoria` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `causali`
--
ALTER TABLE `causali`
  MODIFY `id_causale` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `clienti_fornitori`
--
ALTER TABLE `clienti_fornitori`
  MODIFY `id_cliente_fornitore` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `lotti_produzione`
--
ALTER TABLE `lotti_produzione`
  MODIFY `id_lotto_produzione` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `magazzino_articoli`
--
ALTER TABLE `magazzino_articoli`
  MODIFY `id_articolo_magazzino` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `sottocategorie`
--
ALTER TABLE `sottocategorie`
  MODIFY `id_sottocategoria` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT per la tabella `unita_misura`
--
ALTER TABLE `unita_misura`
  MODIFY `id_unita_misura` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `uscite_magazzino`
--
ALTER TABLE `uscite_magazzino`
  MODIFY `ID_uscita_magazzino` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `vendite`
--
ALTER TABLE `vendite`
  MODIFY `id_lotto_produzione` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `anagrafiche_articoli`
--
ALTER TABLE `anagrafiche_articoli`
  ADD CONSTRAINT `FK_anagrafica_articoli_sottocategoria` FOREIGN KEY (`id_sottocategoria`) REFERENCES `sottocategorie` (`id_sottocategoria`),
  ADD CONSTRAINT `FK_anagrafica_articoli_unita_misura` FOREIGN KEY (`id_unita_misura`) REFERENCES `unita_misura` (`id_unita_misura`);

--
-- Limiti per la tabella `anagrafiche_prodotti`
--
ALTER TABLE `anagrafiche_prodotti`
  ADD CONSTRAINT `FK_prodotto_unita_misura` FOREIGN KEY (`id_unita_misura`) REFERENCES `unita_misura` (`id_unita_misura`);

--
-- Limiti per la tabella `lotti_produzione`
--
ALTER TABLE `lotti_produzione`
  ADD CONSTRAINT `FK_lotto_produzione_prodotto` FOREIGN KEY (`id_prodotto`) REFERENCES `anagrafiche_prodotti` (`id_prodotto`);

--
-- Limiti per la tabella `magazzino_articoli`
--
ALTER TABLE `magazzino_articoli`
  ADD CONSTRAINT `FK_articolo_magazzino_articolo` FOREIGN KEY (`id_articolo`) REFERENCES `anagrafiche_articoli` (`id_articolo`),
  ADD CONSTRAINT `FK_articolo_magazzino_cliente_fornitore` FOREIGN KEY (`id_fornitore`) REFERENCES `clienti_fornitori` (`id_cliente_fornitore`);

--
-- Limiti per la tabella `sottocategorie`
--
ALTER TABLE `sottocategorie`
  ADD CONSTRAINT `FK_sottocategoria_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorie` (`id_categoria`);

--
-- Limiti per la tabella `uscite_magazzino`
--
ALTER TABLE `uscite_magazzino`
  ADD CONSTRAINT `FK_uscita_magazzino_causale` FOREIGN KEY (`id_causale`) REFERENCES `causali` (`id_causale`),
  ADD CONSTRAINT `FK_uscita_magazzino_lotto_produzione` FOREIGN KEY (`id_lotto_produzione`) REFERENCES `lotti_produzione` (`id_lotto_produzione`);

--
-- Limiti per la tabella `vendite`
--
ALTER TABLE `vendite`
  ADD CONSTRAINT `FK_vendita_clienti` FOREIGN KEY (`id_cliente`) REFERENCES `clienti_fornitori` (`id_cliente_fornitore`),
  ADD CONSTRAINT `FK_vendita_lotto_produzione` FOREIGN KEY (`id_lotto_produzione`) REFERENCES `lotti_produzione` (`id_lotto_produzione`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
