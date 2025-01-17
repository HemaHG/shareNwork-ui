import { Maybe, ResourceRequestSkillsProficiency, Skill } from '@app/models';
import { Chip, DescriptionList, DescriptionListDescription, DescriptionListGroup, DescriptionListTerm } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';


interface ViewResourceProps {
    resourceRequestObject: any;
    skills: Maybe<Maybe<Pick<ResourceRequestSkillsProficiency, "id" | "proficiencyLevel"> & { skill?: Maybe<Pick<Skill, "id" | "name">> | undefined; }>[]> | undefined
}

const ViewResourceRequest: React.FC<ViewResourceProps> = ({ resourceRequestObject, skills }) => {
    const [requestObj, setRequestObj] = useState<any>({});
    useEffect(() => {
        setRequestObj(resourceRequestObject);
    }, [resourceRequestObject])
    return (
        <React.Fragment>
            <DescriptionList>
                <DescriptionListGroup>
                    <DescriptionListTerm>Requested By</DescriptionListTerm>
                    <DescriptionListDescription>{requestObj?.requester?.firstName}</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                    <DescriptionListTerm>Request Date</DescriptionListTerm>
                    <DescriptionListDescription>{(new Date(requestObj?.createdAt)).toLocaleString()}</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                    <DescriptionListTerm>Pillar</DescriptionListTerm>
                    <DescriptionListDescription>{requestObj?.pillar}</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                    <DescriptionListTerm>Project</DescriptionListTerm>
                    <DescriptionListDescription>{requestObj?.project}</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                    <DescriptionListTerm>Task description</DescriptionListTerm>
                    <DescriptionListDescription>{requestObj?.taskDetails}</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                    <DescriptionListTerm>Start Date</DescriptionListTerm>
                    <DescriptionListDescription>{requestObj?.startDate}</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                    <DescriptionListTerm>End Date</DescriptionListTerm>
                    <DescriptionListDescription>{requestObj?.endDate}</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                    <DescriptionListTerm>Skills required</DescriptionListTerm>
                    <DescriptionListDescription>{skills?.map(s => <Chip key={s?.id} isReadOnly>{s.skill?.name}</Chip>)}</DescriptionListDescription>
                </DescriptionListGroup>
            </DescriptionList>
        </React.Fragment>
    );

}
export default ViewResourceRequest;