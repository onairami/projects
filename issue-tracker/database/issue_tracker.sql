drop user tracker cascade;

create user tracker identified by tracker;
grant connect to tracker;
grant unlimited tablespace to tracker;
grant create table to tracker;
grant create procedure to tracker;
grant create sequence to tracker;

create table tracker.users (user_id number primary key not null, user_username varchar2 (40), user_last_name varchar2 (40), user_first_name varchar2 (40), user_email varchar2 (40), user_password varchar2 (4000));

create table tracker.sectors (sector_id number primary key not null, sector_name varchar2 (30), sector_description varchar2 (4000));

create table tracker.users_sectors (user_id number, sector_id number);

create table tracker.tickets (ticket_id number primary key not null, ticket_creator number, ticket_assignee number, ticket_summary varchar2 (4000), ticket_description varchar2 (4000), ticket_sector number, ticket_status varchar2 (20), ticket_creation_date date);

create table tracker.ticket_replies (reply_id number, reply_ticket number, reply_author number, reply_text varchar2 (4000), reply_date date);



alter table tracker.tickets add constraint fk_tickets_users foreign key (ticket_creator) references users (user_id);

alter table tracker.tickets add constraint fk_tickets_assignee foreign key (ticket_assignee) references users (user_id);

alter table tracker.users_sectors add constraint fk_userssectors_users foreign key (user_id) references users;

alter table tracker.users_sectors add constraint fk_userssectors_sectors foreign key (sector_id) references sectors;

alter table tracker.ticket_replies add constraint fk_ticket_replies_user foreign key (reply_author) references users (user_id);



create sequence tracker.seq_tickets increment by 1;

create sequence tracker.seq_users increment by 1;

create sequence tracker.seq_sectors increment by 1;

create sequence tracker.seq_replies increment by 1;


create or replace package tracker.tracker_logic as
    procedure create_user (username varchar2, lastname varchar2, firstname varchar2, email varchar2, password varchar2, v_output out number);
    procedure add_user_to_sector (userid number, sectorid number, exit_code out number);
    procedure create_ticket (creator number, assignee number, summary varchar2, description varchar2, sector number, status varchar2, exit_code out number);
end tracker_logic;
/

create or replace package body tracker.tracker_logic as

    v_exitcode number;
    
    procedure create_user (username varchar2, lastname varchar2, firstname varchar2, email varchar2, password varchar2, v_output out number) is
    
        v_aux number;
    begin
        v_exitcode := 0;
        select count(email) into v_aux from users where user_email = email;
        if (v_aux > 0) then
            v_exitcode := 1;
            v_output := v_exitcode;
            return;
        end if;
        
        insert into users (user_id, user_username, user_last_name, user_first_name, user_email, user_password) values (seq_users.nextval, username, lastname, firstname, email, password);
        v_output := v_exitcode;
    end;
    
    
    procedure add_user_to_sector (userid number, sectorid number, exit_code out number)
    is
    
    begin
    exit_code := 0;
    insert into users_sectors (user_id, sector_id) values (userid, sectorid);
    end;
    
    
    procedure create_ticket (creator number, assignee number, summary varchar2, description varchar2, sector number, status varchar2, exit_code out number)
    is
    
    begin
        insert into tickets (ticket_id, ticket_creator, ticket_assignee, ticket_summary, ticket_description, ticket_sector, ticket_status, ticket_creation_date)
        values (seq_tickets.nextval, creator, assignee, summary, description, sector, status, sysdate());
        
        exit_code := 0;
    end;
    
    
end tracker_logic;
/
