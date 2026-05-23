-- calculate bonus for each employee
-- employee receives bonus = 100% salary
--- if (employee__id) odd number 
--- name doesnt start with letter M 
--- otherwise bonus =0 
---Return the employee_id and bonus for each employee, 
--- ordered by employee_id.


Select employee_id, 
case 
    when employee_id % 2 = 1 
    AND 
    name not like 'M%' 
    then salary 
    else 0 
end as bonus from employees 
order by employee_id