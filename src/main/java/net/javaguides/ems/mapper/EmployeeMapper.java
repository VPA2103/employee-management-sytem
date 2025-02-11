package net.javaguides.ems.mapper;
import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.entity.Employee;

public class EmployeeMapper {

//    @Mapper
//    public interface EmployeeMapper {
//        EmployeeDto mapToEmployeeDto(Employee employee);
//        Employee mapToEmployee(EmployeeDto employeeDto);
//    }

    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto(
          employee.getId(),
          employee.getFirstName(),
          employee.getLastName(),
          employee.getEmail()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        Long id = employeeDto.getId() != null ? employeeDto.getId() : 0L;
        return new Employee(
          id,
          employeeDto.getFirstName(),
          employeeDto.getLastName(),
          employeeDto.getEmail()
        );
    }
}
