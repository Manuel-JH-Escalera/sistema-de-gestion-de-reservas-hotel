-- Creación de la tabla de Hoteles
CREATE TABLE Hoteles (
    hotel_id serial PRIMARY KEY,
    nombre VARCHAR(255),
    ubicacion VARCHAR(255),
    descripcion TEXT,
    estrellas INTEGER
);

-- Creación de la tabla de Tipos de Habitación
CREATE TABLE TiposDeHabitacion (
    tipo_id serial PRIMARY KEY,
    nombre VARCHAR(255),
    descripcion TEXT,
    precio_base DECIMAL(10, 2)
);

-- Creación de la tabla de Habitaciones
CREATE TABLE Habitaciones (
    habitacion_id serial PRIMARY KEY,
    hotel_id INTEGER REFERENCES Hoteles(hotel_id),
    tipo_id INTEGER REFERENCES TiposDeHabitacion(tipo_id),
    numero VARCHAR(20),
    disponible BOOLEAN
);

-- Creación de la tabla de Clientes
CREATE TABLE Clientes (
    cliente_id serial PRIMARY KEY,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    correo VARCHAR(255),
    telefono VARCHAR(20)
);

-- Creación de la tabla de Reservas
CREATE TABLE Reservas (
    reserva_id serial PRIMARY KEY,
    cliente_id INTEGER REFERENCES Clientes(cliente_id),
    habitacion_id INTEGER REFERENCES Habitaciones(habitacion_id),
    fecha_entrada DATE,
    fecha_salida DATE,
    precio_total DECIMAL(10, 2)
);


INSERT INTO Hoteles (nombre, ubicacion, descripcion, estrellas)
VALUES
('Hotel Pacific Reef', 'Viña del Mar', 'Resort con vista al mar con todas las comodidades.', 4);


INSERT INTO TiposDeHabitacion (nombre, descripcion, precio_base)
VALUES
    ('Individual', 'Habitación individual con cama individual.', 100.00),
    ('Doble', 'Habitación doble con cama king-size.', 150.00),
    ('Suite', 'Suite de lujo con sala de estar y bañera de hidromasaje.', 250.00);
    
    
-- Habitaciones en el hotel
INSERT INTO Habitaciones (hotel_id, tipo_id, numero, disponible)
VALUES
    (1, 1, '101', false),
    (1, 2, '102', true),
    (1, 2, '103', false);
    
--Clientes del hotel 
INSERT INTO Clientes (nombre, apellido, correo, telefono)
VALUES
    ('Juan', 'Sparks', 'juan@ejemplo.com', '12345678'),
    ('María', 'Lopez', 'maria@ejemplo.com', '23456789'),
    ('Luis', 'Marin', 'luis@ejemplo.com', '01234567');    
    
 --Reservas del hotel   
INSERT INTO Reservas (cliente_id, habitacion_id, fecha_entrada, fecha_salida, precio_total)
VALUES
    (1, 1, '2024-10-01', '2024-10-05', 400.00),
    (2, 5, '2024-09-15', '2024-09-18', 450.00),
    (3, 9, '2024-11-01', '2024-11-10', 850.00);
    
    
--prueba
Select * from clientes;