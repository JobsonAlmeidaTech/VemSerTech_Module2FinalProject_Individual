# <p align="center"> Vem Ser Tech Course - Individual Final Project of Module 2 - Loan System </p>

<p align="center">
<img src="images/VemSerTech.jpg"  alt="VemSerTech" height="200px align="left" />
<img src="images/loan.jpg"  alt="loan" height="200px align="right"/>
</p>

## Vem Ser Tech

Vem Ser Tech was a course offered by a partnership between the companies Ada Tech and iFood. Each student was offered one subject among 4 possibilities: Front-End, Back-End, DevOps and Data. I chose the Back-End technology track, which aimed to study the JavaScript language divided into 6 modules:

Module 1: Programming Language

Module 2: Object Oriented Programming

Module 3: Database

Module 4: Node.js with Express (intermediate level)

Module 5: Node.js with Express (advanced level)

Module 6: Automated Testing

The course lasted about 6 months with synchronous classes every Monday, Wednesday and Friday, from 7pm to 10pm, between October 6, 2023 and March 15, 2024. You can find more information about this course here: <a href="https://ada.tech/sou-aluno/programas/ifood-vem-ser-tech">Vem Ser Tech</a>

## Purpose 

At the end of the second module, each student was asked to carry out an individual project and a group project. This project refers to the individual one. The objective of this project was to build a system to manage loan requests made the day before. The following text contains all the project requirements that were written by the module teacher. To build this project was used typescript language. 

## Requirements

In a loan system, every day we receive a file called **solicitacoes.json** with all the loan requests from the previous day. Knowing this, we need to create a script that must read this file, filter the loans that will be approved and then save them in a new file called **empretimos-aprovados.json**.
A loan will be approved when:

- The applicant is over 18 years old.
- The total loan amount is greater than the required amount.
- The total value of the loan is equal to the number of installments \* value per installment.

#### Comments

Use static functions and abstract classes.
