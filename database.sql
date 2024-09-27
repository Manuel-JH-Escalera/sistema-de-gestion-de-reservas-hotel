-- tabla de hotel
CREATE TABLE hotel (
    hotel_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR2(100) NOT NULL,
    direccion VARCHAR2(200) NOT NULL,
    categoria NUMBER NOT NULL
);

-- tabla de habitacion
CREATE TABLE habitacion (
    habitacion_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    hotel_id NUMBER REFERENCES hotel(hotel_id),
    tipo VARCHAR2(50) CHECK (tipo IN ('individual', 'doble', 'suite')) NOT NULL,
    capacidad NUMBER CHECK (capacidad >= 1 AND capacidad <= 4) NOT NULL,
    precio NUMBER(10, 2) NOT NULL
);

-- tabla de usuario
CREATE TABLE usuario (
    user_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR2(50) NOT NULL,
    apellido VARCHAR2(50) NOT NULL,
    email VARCHAR2(100) UNIQUE NOT NULL,
    tel VARCHAR2(20),
    telefono VARCHAR2(20),
    password VARCHAR2(100) NOT NULL
);

-- tabla de reserva
CREATE TABLE reserva (
    reserva_id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    habitacion_id NUMBER REFERENCES habitacion(habitacion_id),
    user_id NUMBER REFERENCES usuario(user_id),
    fecha_entrada DATE NOT NULL,
    fecha_salida DATE NOT NULL,
    cantidad_personas NUMBER NOT NULL
);


--
-- datos en hotel
INSERT INTO hotel (nombre, direccion, categoria) VALUES 
('Hotel Playa Bonita', '123 Calle Mar, Ciudad Costera', 5),
('Hotel Montaña Azul', '456 Avenida Montaña, Ciudad Serrana', 4);

-- datos en habitacion
INSERT INTO habitacion (hotel_id, tipo, capacidad, precio) VALUES 
(1, 'suite', 2, 300.00), 
(1, 'doble', 2, 150.00), 
(1, 'individual', 1, 60.00), 
(2, 'suite', 3, 250.00), 
(2, 'doble', 2, 100.00),
(2, 'individual', 1, 50.00);

-- datos en usuario
INSERT INTO usuario (nombre, apellido, email, tel, telefono, password) VALUES 
('Juan', 'Perez', 'juan.perez@mail.com', '12345678', '912345678', 'password123'),
('Maria', 'Gomez', 'maria.gomez@mail.com', '87654321', '987654321', 'password456');

-- datos en reserva
INSERT INTO reserva (habitacion_id, user_id, fecha_entrada, fecha_salida, cantidad_personas) VALUES 
(1, 1, TO_DATE('2024-10-01', 'YYYY-MM-DD'), TO_DATE('2024-10-05', 'YYYY-MM-DD'), 2),
(3, 2, TO_DATE('2024-10-10', 'YYYY-MM-DD'), TO_DATE('2024-10-15', 'YYYY-MM-DD'), 1);







