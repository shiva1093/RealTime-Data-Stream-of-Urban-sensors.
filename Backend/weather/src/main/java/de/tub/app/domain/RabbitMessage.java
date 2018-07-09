package de.tub.app.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

/**
 *
 * @author Naveed Kamran
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class RabbitMessage {

    public enum CommandType {
        CREATE, DELETE
    };

    private String bindingID;
    private String settings;
    private List condition;
    private Boolean status;
    private CommandType command;

    public RabbitMessage() {
    }

    public RabbitMessage(String bindingID, String settings, List condition, Boolean status, CommandType command) {
        this.bindingID = bindingID;
        this.settings = settings;
        this.condition = condition;
        this.status = status;
        this.command = command;
    }

    @Override
    public String toString() {
        return "RabbitMessage{" + "bindingID=" + getBindingID() + ", settings=" + settings + ", condition=" + condition + ", status=" + status + ", command=" + command + '}';
    }

    /**
     * @return the bindingID
     */
    public String getBindingID() {
        return bindingID;
    }

    /**
     * @param bindingID the bindingID to set
     */
    public void setBindingID(String bindingID) {
        this.bindingID = bindingID;
    }

    /**
     * @return the settings
     */
    public String getSettings() {
        return settings;
    }

    /**
     * @param settings the settings to set
     */
    public void setSettings(String settings) {
        this.settings = settings;
    }

    /**
     * @return the condition
     */
    public List getCondition() {
        return condition;
    }

    /**
     * @param condition the condition to set
     */
    public void setCondition(List condition) {
        this.condition = condition;
    }

    /**
     * @return the status
     */
    public Boolean getStatus() {
        return status;
    }

    /**
     * @param status the status to set
     */
    public void setStatus(Boolean status) {
        this.status = status;
    }

    /**
     * @return the command
     */
    public CommandType getCommand() {
        return command;
    }

    /**
     * @param command the command to set
     */
    public void setCommand(CommandType command) {
        this.command = command;
    }

}
