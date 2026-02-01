# 📚 MATLAB Programming Notes for ECE BTech Students

## Table of Contents
1. [Introduction to MATLAB](#introduction)
2. [Basic Commands & Syntax](#basic-commands)
3. [Variables & Data Types](#variables)
4. [Matrices & Arrays](#matrices)
5. [Plotting & Visualization](#plotting)
6. [Control Structures](#control-structures)
7. [Functions](#functions)
8. [Signal Processing Basics](#signal-processing)
9. [Circuit Analysis](#circuit-analysis)
10. [Tips & Tricks](#tips)

---

## 🎯 Introduction to MATLAB {#introduction}

**MATLAB** = **MAT**rix **LAB**oratory

> 💡 **Key Point**: MATLAB is designed to work with matrices and is perfect for mathematical computations, signal processing, and engineering applications.

### Why MATLAB for ECE Students?
- ✅ Easy signal processing and analysis
- ✅ Built-in functions for filters, FFT, convolution
- ✅ Great for circuit simulation
- ✅ Excellent visualization tools
- ✅ Quick prototyping

---

## 🔤 Basic Commands & Syntax {#basic-commands}

### Essential Commands

```matlab
% This is a comment (use % for single line)

clc          % Clear command window
clear        % Clear all variables from workspace
clear all    % Clear everything
close all    % Close all figure windows
help sqrt    % Get help on sqrt function
doc plot     % Open documentation for plot
```

> ⚠️ **Important**: MATLAB is **case-sensitive**! `A` and `a` are different variables.

### Basic Arithmetic

```matlab
% Basic operations
a = 5 + 3        % Addition → 8
b = 10 - 4       % Subtraction → 6
c = 6 * 7        % Multiplication → 42
d = 20 / 5       % Division → 4
e = 2^3          % Power → 8
f = mod(17, 5)   % Modulus (remainder) → 2

% Display result
disp(a)          % Display variable value
fprintf('Value of a is %d\n', a)  % Formatted output
```

### Suppressing Output

```matlab
x = 10;     % Semicolon suppresses output
y = 20      % No semicolon → displays result
```

> 💡 **Pro Tip**: Always use semicolon (`;`) to suppress output in scripts to keep your command window clean!

---

## 📊 Variables & Data Types {#variables}

### Variable Naming Rules

✅ **Valid**: `voltage`, `V1`, `current_total`, `R_load`  
❌ **Invalid**: `1voltage` (starts with number), `V-1` (contains hyphen)

### Common Data Types

```matlab
% Numbers
int_num = 42              % Integer
float_num = 3.14159       % Floating point
complex_num = 3 + 4i      % Complex number (i or j for imaginary)

% Strings
name = 'MATLAB'           % Character array
text = "Hello World"      % String (newer versions)

% Logical (Boolean)
flag = true               % or false
result = (5 > 3)         % Returns true (1)
```

### **🔥 Important for ECE**: Complex Numbers

```matlab
% Representing AC signals
V = 10 + 5i              % Voltage phasor
I = 3 - 2j               % Current phasor (j also works)

% Operations on complex numbers
magnitude = abs(V)        % Magnitude → 11.18
phase = angle(V)          % Phase in radians → 0.4636
phase_deg = angle(V)*180/pi  % Phase in degrees → 26.57°

% Polar to rectangular
r = 10; theta = pi/4;
V_rect = r * exp(1i*theta)   % Using Euler's formula
```

---

## 📐 Matrices & Arrays {#matrices}

> 🎯 **Core Concept**: Everything in MATLAB is a matrix!

### Creating Matrices

```matlab
% Row vector (1×3)
row = [1 2 3]            % Or use commas: [1, 2, 3]

% Column vector (3×1)
col = [1; 2; 3]          % Semicolon for new row

% 2D Matrix
A = [1 2 3; 4 5 6; 7 8 9]   % 3×3 matrix

% Special matrices
zeros(3,3)               % 3×3 matrix of zeros
ones(2,4)                % 2×4 matrix of ones
eye(4)                   % 4×4 identity matrix
rand(3,3)                % 3×3 random matrix [0,1]
diag([1 2 3])           % Diagonal matrix
```

### **Array vs Matrix Operations** ⚡

```matlab
A = [1 2; 3 4];
B = [5 6; 7 8];

% Matrix multiplication (linear algebra)
C = A * B                % Result: [19 22; 43 50]

% Element-wise operations (use dot)
C = A .* B               % Element-by-element: [5 12; 21 32]
C = A ./ B               % Element division
C = A .^ 2               % Each element squared: [1 4; 9 16]
```

> ⚠️ **Remember**: Use **dot (.)** before operators for element-wise operations!

### Indexing & Accessing Elements

```matlab
A = [10 20 30; 40 50 60; 70 80 90];

% Accessing elements
A(2,3)                   % Row 2, Column 3 → 60
A(1,:)                   % All of row 1 → [10 20 30]
A(:,2)                   % All of column 2 → [20; 50; 80]
A(2,:) = [100 110 120]   % Replace entire row 2

% Linear indexing
A(5)                     % 5th element (column-wise) → 50

% Useful functions
size(A)                  % Returns [3 3]
length(A)                % Returns 3 (largest dimension)
A'                       % Transpose
```

### Creating Ranges

```matlab
% start:end
x = 1:10                 % [1 2 3 4 5 6 7 8 9 10]

% start:step:end
x = 0:0.5:3              % [0 0.5 1.0 1.5 2.0 2.5 3.0]

% Linearly spaced
x = linspace(0, 10, 5)   % 5 points from 0 to 10
                         % [0 2.5 5.0 7.5 10]

% Logarithmically spaced
f = logspace(0, 3, 4)    % [1 10 100 1000]
```

---

## 📈 Plotting & Visualization {#plotting}

### Basic 2D Plotting

```matlab
% Simple plot
x = 0:0.1:10;
y = sin(x);
plot(x, y)
title('Sine Wave')
xlabel('Time (seconds)')
ylabel('Amplitude')
grid on

% Multiple plots on same figure
x = 0:0.01:2*pi;
y1 = sin(x);
y2 = cos(x);
plot(x, y1, 'r-', x, y2, 'b--')  % red solid, blue dashed
legend('sin(x)', 'cos(x)')
```

### **Line Styles & Colors** 📊

| Symbol | Color | Symbol | Line Style |
|--------|-------|--------|------------|
| `r` | Red | `-` | Solid |
| `g` | Green | `--` | Dashed |
| `b` | Blue | `:` | Dotted |
| `k` | Black | `-.` | Dash-dot |
| `m` | Magenta | `o` | Circle marker |

### Subplots

```matlab
% Creating multiple plots in one figure
x = linspace(0, 2*pi, 100);

subplot(2,2,1)           % 2 rows, 2 cols, position 1
plot(x, sin(x))
title('Sine')

subplot(2,2,2)
plot(x, cos(x))
title('Cosine')

subplot(2,2,3)
plot(x, tan(x))
title('Tangent')
ylim([-5 5])            % Limit y-axis

subplot(2,2,4)
plot(x, exp(x))
title('Exponential')
```

### **ECE Example: Plotting Signals**

```matlab
% Plotting a modulated signal
fs = 1000;               % Sampling frequency
t = 0:1/fs:1;            % Time vector (0 to 1 second)

% Carrier and message signals
fc = 50;                 % Carrier frequency (50 Hz)
fm = 5;                  % Message frequency (5 Hz)
carrier = cos(2*pi*fc*t);
message = cos(2*pi*fm*t);

% AM Modulation
am_signal = (1 + 0.5*message) .* carrier;

% Plotting
figure
subplot(3,1,1)
plot(t, message)
title('Message Signal')
xlabel('Time (s)')

subplot(3,1,2)
plot(t, carrier)
title('Carrier Signal')
xlabel('Time (s)')

subplot(3,1,3)
plot(t, am_signal)
title('AM Modulated Signal')
xlabel('Time (s)')
```

---

## 🔄 Control Structures {#control-structures}

### If-Else Statements

```matlab
voltage = 12;

if voltage > 10
    disp('High voltage')
elseif voltage > 5
    disp('Medium voltage')
else
    disp('Low voltage')
end
```

> 💡 **Syntax Note**: MATLAB uses `elseif` (one word), not `else if`!

### For Loops

```matlab
% Basic for loop
for i = 1:5
    fprintf('Iteration %d\n', i)
end

% Loop through array
resistors = [100, 220, 470, 1000];
for R = resistors
    fprintf('Resistance: %d ohms\n', R)
end

% Nested loops (creating multiplication table)
for i = 1:3
    for j = 1:3
        fprintf('%d ', i*j)
    end
    fprintf('\n')
end
```

### While Loops

```matlab
% Charging capacitor
V = 0;
V_max = 12;
time = 0;

while V < V_max * 0.99    % Until 99% charged
    V = V_max * (1 - exp(-time/5));  % RC charging
    time = time + 0.1;
end

fprintf('Charged to %.2f V in %.2f seconds\n', V, time)
```

### Switch-Case

```matlab
component = 'resistor';

switch component
    case 'resistor'
        disp('Measures in Ohms')
    case 'capacitor'
        disp('Measures in Farads')
    case 'inductor'
        disp('Measures in Henrys')
    otherwise
        disp('Unknown component')
end
```

---

## 🛠️ Functions {#functions}

### Built-in Mathematical Functions

```matlab
% Trigonometric (in radians)
sin(pi/2)                % → 1
cos(0)                   % → 1
tan(pi/4)                % → 1

% Degrees to radians
sind(90)                 % → 1 (sine of 90 degrees)
cosd(180)                % → -1

% Exponential & Logarithmic
exp(1)                   % e^1 → 2.7183
log(10)                  % Natural log (ln)
log10(100)               % Base-10 log → 2
sqrt(16)                 % Square root → 4

% Rounding
round(3.7)               % → 4
ceil(3.2)                % → 4 (round up)
floor(3.9)               % → 3 (round down)

% Absolute value
abs(-5)                  % → 5
abs(3+4i)                % → 5 (magnitude of complex)
```

### Creating Custom Functions

**Method 1: Function File** (save as `calculate_power.m`)

```matlab
function P = calculate_power(V, I)
    % Calculates electrical power
    % P = V * I
    %
    % Inputs:
    %   V - Voltage in volts
    %   I - Current in amperes
    % Output:
    %   P - Power in watts
    
    P = V * I;
end
```

**Usage:**
```matlab
power = calculate_power(12, 2)  % → 24 watts
```

**Method 2: Anonymous Functions**

```matlab
% Single line functions
impedance = @(R, X) sqrt(R^2 + X^2);
Z = impedance(3, 4)             % → 5 ohms

% Ohm's law
voltage = @(I, R) I * R;
V = voltage(2, 10)              % → 20 volts
```

### **ECE Example: RLC Circuit Function**

```matlab
function [f0, Q, BW] = rlc_analysis(R, L, C)
    % Analyzes series RLC circuit
    %
    % Inputs:
    %   R - Resistance (ohms)
    %   L - Inductance (henrys)
    %   C - Capacitance (farads)
    % Outputs:
    %   f0 - Resonant frequency (Hz)
    %   Q  - Quality factor
    %   BW - Bandwidth (Hz)
    
    w0 = 1/sqrt(L*C);           % Angular frequency
    f0 = w0/(2*pi);             % Resonant frequency
    Q = w0*L/R;                 % Quality factor
    BW = f0/Q;                  % Bandwidth
end

% Usage
[freq, quality, bandwidth] = rlc_analysis(10, 0.1, 1e-6);
fprintf('Resonant Freq: %.2f Hz\n', freq);
fprintf('Quality Factor: %.2f\n', quality);
fprintf('Bandwidth: %.2f Hz\n', bandwidth);
```

---

## 🎵 Signal Processing Basics {#signal-processing}

### Generating Signals

```matlab
% Time vector
fs = 1000;               % Sampling frequency (Hz)
T = 1/fs;                % Sampling period
t = 0:T:1;               % 1 second duration

% Sine wave
f = 10;                  % Frequency (Hz)
A = 5;                   % Amplitude
signal = A * sin(2*pi*f*t);

% Square wave
square_wave = square(2*pi*f*t);

% Sawtooth wave
sawtooth_wave = sawtooth(2*pi*f*t);
```

### **Convolution** (Important for ECE!)

```matlab
% Input signal and impulse response
x = [1 2 3 4];
h = [1 1 1];             % Moving average filter

% Convolution
y = conv(x, h);          % → [1 3 6 9 7 4]

% Visualize
figure
subplot(3,1,1), stem(x), title('Input Signal')
subplot(3,1,2), stem(h), title('Impulse Response')
subplot(3,1,3), stem(y), title('Output (Convolution)')
```

### Fast Fourier Transform (FFT)

```matlab
% Create a signal with two frequencies
fs = 1000;               % Sampling frequency
t = 0:1/fs:1;
f1 = 50; f2 = 120;       % Two frequency components
signal = sin(2*pi*f1*t) + 0.5*sin(2*pi*f2*t);

% Compute FFT
N = length(signal);
Y = fft(signal);
P2 = abs(Y/N);
P1 = P2(1:N/2+1);
P1(2:end-1) = 2*P1(2:end-1);
f = fs*(0:(N/2))/N;

% Plot
figure
subplot(2,1,1)
plot(t, signal)
title('Time Domain Signal')
xlabel('Time (s)')

subplot(2,1,2)
plot(f, P1)
title('Frequency Domain (FFT)')
xlabel('Frequency (Hz)')
ylabel('|P1(f)|')
xlim([0 200])
```

### Simple Filters

```matlab
% Low-pass filter
fs = 1000;
fc = 50;                 % Cutoff frequency
[b, a] = butter(5, fc/(fs/2));  % 5th order Butterworth

% Apply filter
filtered_signal = filter(b, a, signal);

% Plot
plot(t, signal, 'b', t, filtered_signal, 'r')
legend('Original', 'Filtered')
```

---

## ⚡ Circuit Analysis {#circuit-analysis}

### **Solving Linear Equations** (Nodal/Mesh Analysis)

```matlab
% Example: Solve nodal analysis equations
% 5*V1 - 2*V2 = 10
% -2*V1 + 8*V2 = 20

% Coefficient matrix [A]
A = [5 -2; -2 8];

% Constant matrix [B]
B = [10; 20];

% Solve [A][V] = [B]
V = A\B                  % Left division → [3.33; 3.33]

% Or using inverse (less efficient)
V = inv(A) * B
```

### **Voltage Divider Example**

```matlab
function Vout = voltage_divider(Vin, R1, R2)
    % Calculates output voltage in a voltage divider
    Vout = Vin * R2 / (R1 + R2);
end

% Example
Vin = 12;
R1 = 1000;              % 1kΩ
R2 = 2000;              % 2kΩ
Vout = voltage_divider(Vin, R1, R2)  % → 8V
```

### **Impedance Calculation**

```matlab
% Series RLC impedance
f = 50;                  % Frequency (Hz)
R = 10;                  % Resistance (Ω)
L = 0.1;                 % Inductance (H)
C = 100e-6;              % Capacitance (F)

omega = 2*pi*f;
XL = omega * L;          % Inductive reactance
XC = 1/(omega * C);      % Capacitive reactance

Z = R + 1i*(XL - XC);    % Total impedance

fprintf('Impedance: %.2f + j%.2f Ω\n', real(Z), imag(Z))
fprintf('Magnitude: %.2f Ω\n', abs(Z))
fprintf('Phase: %.2f degrees\n', angle(Z)*180/pi)
```

---

## 💡 Tips & Tricks {#tips}

### 1. **Vectorization is Faster!**

❌ **Bad (using loops):**
```matlab
for i = 1:1000
    y(i) = sin(x(i));
end
```

✅ **Good (vectorized):**
```matlab
y = sin(x);              % Much faster!
```

### 2. **Preallocation**

❌ **Bad:**
```matlab
for i = 1:10000
    data(i) = i^2;       % Array grows each iteration (slow)
end
```

✅ **Good:**
```matlab
data = zeros(1, 10000);  % Preallocate memory
for i = 1:10000
    data(i) = i^2;
end
```

### 3. **Useful Shortcuts**

| Command | Description |
|---------|-------------|
| `Ctrl + C` | Stop execution |
| `↑` Arrow | Previous command |
| `whos` | List all variables with size |
| `which function_name` | Find function location |

### 4. **Debugging**

```matlab
% Add breakpoints in editor or use keyboard
keyboard                 % Pause execution (type 'return' to continue)

% Display variable during execution
disp(variable_name)

% Check variable type
class(variable_name)
```

### 5. **Common ECE Constants**

```matlab
% Define at start of your script
c = 3e8;                 % Speed of light (m/s)
epsilon_0 = 8.854e-12;   % Permittivity of free space
mu_0 = 4*pi*1e-7;        % Permeability of free space
e = 1.602e-19;           % Electron charge (C)
k = 1.381e-23;           % Boltzmann constant
```

### 6. **Exporting Figures**

```matlab
% Save plot as image
saveas(gcf, 'my_plot.png')

% High quality export
print('my_plot', '-dpng', '-r300')  % 300 DPI
```

---

## 🎓 Practice Problems

### Problem 1: RC Circuit Time Constant
Write a function to plot the voltage across a capacitor charging through a resistor.

```matlab
function plot_rc_charging(R, C, Vs)
    % R - Resistance (ohms)
    % C - Capacitance (farads)
    % Vs - Supply voltage (volts)
    
    tau = R * C;                    % Time constant
    t = 0:tau/100:5*tau;            % 0 to 5τ
    Vc = Vs * (1 - exp(-t/tau));    % Voltage equation
    
    plot(t, Vc, 'LineWidth', 2)
    hold on
    plot([tau tau], [0 Vs*0.632], 'r--')  % Mark τ
    xlabel('Time (s)')
    ylabel('Capacitor Voltage (V)')
    title(sprintf('RC Charging (τ = %.3f s)', tau))
    grid on
    legend('Vc(t)', '63.2% at τ')
end

% Test it
plot_rc_charging(1000, 100e-6, 12)  % 1kΩ, 100µF, 12V
```

### Problem 2: Frequency Response
Plot the frequency response of a simple RC low-pass filter.

```matlab
R = 1000;                % 1kΩ
C = 1e-6;                % 1µF
f = logspace(0, 5, 1000);  % 1Hz to 100kHz
omega = 2*pi*f;

H = 1 ./ (1 + 1i*omega*R*C);  % Transfer function
magnitude_dB = 20*log10(abs(H));
phase_deg = angle(H) * 180/pi;

subplot(2,1,1)
semilogx(f, magnitude_dB)
title('Bode Plot - RC Low-Pass Filter')
ylabel('Magnitude (dB)')
grid on

subplot(2,1,2)
semilogx(f, phase_deg)
xlabel('Frequency (Hz)')
ylabel('Phase (degrees)')
grid on
```

---

## 📚 Quick Reference Card

### Matrix Operations
```matlab
A + B         % Addition
A - B         % Subtraction
A * B         % Matrix multiplication
A .* B        % Element-wise multiplication
A / B         % Right division
A \ B         % Left division (solve Ax=B)
A ^ 2         % Matrix power
A .^ 2        % Element-wise power
A'            % Transpose
inv(A)        % Inverse
det(A)        % Determinant
rank(A)       % Rank
eig(A)        % Eigenvalues
```

### Common Functions
```matlab
sum(x)        % Sum of elements
mean(x)       % Average
std(x)        % Standard deviation
max(x)        % Maximum value
min(x)        % Minimum value
sort(x)       % Sort in ascending order
find(x > 5)   % Find indices where condition is true
```

---

## 🎯 Final Tips for ECE Students

1. **Practice regularly** - MATLAB is a skill that improves with use
2. **Use meaningful variable names** - `voltage` instead of `v1`
3. **Comment your code** - Your future self will thank you
4. **Start simple** - Test small parts before building complex systems
5. **Use built-in functions** - Don't reinvent the wheel
6. **Visualize everything** - Plots help understanding
7. **Learn keyboard shortcuts** - Saves time
8. **Read error messages** - They usually tell you exactly what's wrong

---

**Remember**: 🚀 The best way to learn MATLAB is by **DOING**! 

Happy Coding! 💻⚡

