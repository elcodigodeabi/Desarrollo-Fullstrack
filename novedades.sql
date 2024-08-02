-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 01-12-2022 a las 04:03:28
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `asistdiplo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_id` varchar(250) DEFAULT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `img_id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(11, NULL, 'Hola Jesica', 'Prueba editada nuevamente', 'Prueba editada nuevamente'),
(12, NULL, 'NOVEDAD EDITADA', 'ESTA ES UNA NOVEDAD NUEVA', 'HOLA COMO ESTAS'),
(3, NULL, 'fsafsagdashgaha', 'SUBTITULO EDITADO', 'EXSFAGAGASG'),
(10, 'gskr4rgbyljvoopxqfkg', 'Alpine despide a su directora de Asuntos Legales tras el caso Piastri', 'El despido data del 8 de noviembre Es una de las medidas que toman para evitar perder a otro piloto', 'Alpine ha decidido despedir a una figura clave responsable de la pérdida de Oscar Piastri. Se trata de Benedicte Mercer, directora de Asuntos Legales de Alpine Racing. Alpine ha decidido suspender el contrato de Benedicte Mercer, directora de Asuntos Legales de Renault Sport Racing UK, como consecuencia de la pérdida de Oscar Piastri a favor de McLaren para 2023, según ha informado el portal web de Países Bajos Racing News 365. Mercer tiene una amplia experiencia como abogada, de casi 15 años, y trabajó como responsable de Asuntos Legales en A1GP y en Virgin antes de entrar a formar parte de Lotus en 2011. Llevaba más de una década al frente de Asuntos Legales primero en Lotus y ahora en Renault. Sin embargo, la gestión del caso Piastri ha hecho a la cúpula de Renault decidir prescindir de sus servicios.  Alpine confiaba en cubrir el hueco que deja Fernando Alonso con su marcha a Aston Martin con Oscar Piastri. De hecho, los franceses le anunciaron como piloto para 2023, a pesar de no tener un contrato firmado con él. Sin embargo, el australiano negó haber firmado nada con ellos y aseguró que no sería su piloto en 2023. En su lugar, firmó con McLaren, ya que Alpine sólo le ofrecía un asiento con Williams.   ¿Por qué Alpine ha perdido a Piastri? Los franceses reconocieron que cometieron errores en el proceso al no blindar a Piastri y ahora han tomado medidas para que el proceso no se repita en el futuro.   Parte de esta decisión es el despido de la directora de Asuntos Legales, Benedicte Mercer, el pasado 8 de noviembre, aunque no se concreta la razón en el documento presentado en el organismo Companies House. Mercer no pudo gestionar un contrato para atar a Piastri, de ahí su cese.'),
(4, 'wj9zpd2oh9qy4z0erynx', 'Nula la figura de dejar sin efecto la declaración tributaria en periodos diferentes a los legales', 'La Sección Cuarta del Consejo de Estado declaró la nulidad del siguiente aparte, contenido en el parágrafo 2º del artículo 1.6.1.6.3 del Decreto 1625 del 2016 (DUR en materia Tributaria):', 'Para el alto tribunal, la norma acusada no se ajusta al ordenamiento jurídico porque la ineficacia de las declaraciones establecida en la norma acusada no es un aspecto que se limite a la administración y recaudo del tributo, pues tiene un indudable efecto sancionatorio, como quiera que implica presentar una nueva declaración incluyendo la sanción por extemporaneidad o, en caso que no lo haga, que la entidad pueda imponer la sanción por no declarar, previstas en los artículos 641 y 643 del Estatuto Tributario (E. T.).\r\n\r\nPor lo tanto, el aparte acusado compromete el derecho fundamental al debido proceso, porque nadie puede ser sancionado sino conforme a leyes preexistentes al acto que se imputa. Este es un asunto de reserva legal que no puede ser regulado por la Administración, ya que es competencia exclusiva del legislador establecer la descripción de las conductas sancionables, así como la manera de castigar las infracciones.\r\n\r\nDe tal modo que la ley no le delegó al Gobierno Nacional regular los efectos de presentar las declaraciones en periodos diferentes a los establecidos en el artículo 600 del E. T., ni en esa u otra norma de rango legal se estableció algún parámetro que permitiera inferir la consecuencia de “no tener efecto legal alguno”.\r\n\r\nAsí las cosas, la previsión del parágrafo demandado excede el alcance del artículo 600, por lo que el Ministerio de Hacienda desconoció en este caso el principio de legalidad de la potestad reglamentaria, al fijar una consecuencia jurídica que el legislador no estableció en la ley (C. P.: Milton Chaves García).'),
(9, 'avydjkmbiucautkpcbsx', 'PRUEBA DE AGREGADO FINAL', 'PRUEBA DE AGREGADO FINAL', 'PRUEBA DE AGREGADO FINAL');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
