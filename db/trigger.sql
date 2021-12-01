delimiter //
create trigger autocorrect
    before insert on Players
    for each row
begin
    if new.overall > 100 then
        set new.overall = 100;
    end if;
    if new.overall < 0 then
        set new.overall = 0;
    end if;
end;
//
delimiter ;