-- Write your query below
--- output column customer names "names" customer table
---  customers who have never placed an order (no record in orders table )

select c.name from customers c 
left join orders o 
on c.id = o.customer_id
where o.id Is null;